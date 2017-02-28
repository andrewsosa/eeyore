'use strict'

const storage = require('node-persist')
var aimer = require('aimer')


// function by @egoist [https://github.com/egoist/gh-pinned-repos]
function ghPinnedRepos(username) {

  return aimer(`https://github.com/${username}`)
    .then($ => {
      const pinned = $('.pinned-repo-item.public')
      if (!pinned || pinned.length === 0) return []

      const result = []
      pinned.each((index, item) => {
        'use strict'

        let language = $(item).find('p.mb-0').contents().get(2)
        language = language && language.data.trim()

        let owner = $(item).find('.owner').text().trim()
        owner = owner || username

        const forks = $(item).find('a[href$="/network"]').text().trim()
        result[index] = {
          repo: $(item).find('.repo').text(),
          owner,
          description: $(item).find('.pinned-repo-desc').html().trim(),
          language: language || undefined,
          stars: $(item).find('a[href$="/stargazers"]').text().trim(),
          forks: forks ? forks : 0
        }
      })
      return result
    })

}


// Oursource our network request
function fetchRepos(username) {
  return ghPinnedRepos(username).then((res) => {return res})
}


// Wrap our request in a cache
function cachedRepos(username) {

  // Init storage before actions
  return storage.init({dir:'./tmp/', ttl:true}).then($ => {

    // Check storage
    return storage.getItem(username).then((value) => {

      // If not in storage, web request
      if (!value) {
        return getRepos(username).then((repos) => {
          storage.setItem(username, repos)
          return repos
        })
      }

      // If in storage, return it
      else {
        return value
      }

    })

  })

}


// Our general function
function getRepos(username, usecache) {

  if(usecache) {
    return cachedRepos(username)
  } else {
    return getRepos(username)
  }

}

module.exports = function EeyoreJs (options) {
  options = options || {}

  return getRepos
}
