'use strict';

const storage = require('node-persist');
var aimer = require('aimer');

// function by @egoist [https://github.com/egoist/gh-pinned-repos]
function ghPinnedRepos(username) {
  return aimer(`https://github.com/${username}`)
    .then($ => {
      const pinned = $('.pinned-repo-item.public');
      if (!pinned || pinned.length === 0) {
        return [];
      }

      const result = [];
      pinned.each((index, item) => {
        let language = $(item).find('p.mb-0').contents().get(2);
        language = language && language.data.trim();

        let owner = $(item).find('.owner').text().trim();
        owner = owner || username;

        const forks = $(item).find('a[href$="/network"]').text().trim();
        result[index] = {
          repo: $(item).find('.repo').text(),
          owner,
          description: $(item).find('.pinned-repo-desc').html().trim(),
          language: language || undefined,
          stars: $(item).find('a[href$="/stargazers"]').text().trim(),
          forks: forks ? forks : 0
        };
      });
      return result;
    });
}

// Outsource our network request
function fetchRepos(username) {
  return ghPinnedRepos(username).then(res => {
    return res;
  });
}

// Wrap our request in a cache
function cachedRepos(username, persistOptions) {
  // Init storage before actions {dir:cache_path, ttl:true}
  return storage.init(persistOptions).then(() => {
    // Check storage
    return storage.getItem(username).then(value => {
      // If not in storage, web request
      if (!value) {
        console.log('Repo data not cached, fetching...');
        return fetchRepos(username).then(repos => {
          console.log('Storing fetched repo info...');
          storage.setItem(username, repos);
          return repos;
        });
      }

      // Otherwise is in storage, return it
      console.log('Found cached repo data.');
      return value;
    });
  });
}

// Our general function
function getRepos(username, options) {
  if (options) {
    // Make sure options is being used properly
    // if(!options.persist_options) {
    //   throw {'OptionsError': 'Missing required cache_path option.'};
    // }
    return cachedRepos(username, options.persist_options);
  }
  return fetchRepos(username);
}

let eeyore = function (options) {
  options = options || {};

  return getRepos(options);
};

module.exports = eeyore;
