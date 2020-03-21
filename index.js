/*!
 * Eeyore.js
 * Copyright(c) 2018 Andrew Sosa
 * MIT Licensed
 *
 * Istanbul ignores because guaranteeing the example pins is hard
 */

// const aimer = require('aimer')

// originally by @egoist [https://github.com/egoist/gh-pinned-repos],
// modified by @andrewsosa
// function ghPinnedRepos (username) {
//   return aimer(`https://github.com/${username}`)
//     .then($ => {
//       const pinned = $('.pinned-repo-item.public')
//       if (!pinned || pinned.length === 0) {
//         return []
//       }

//       const result = []
//       const re = new RegExp('background-color:(.+);')
//       pinned.each((index, item) => {
//         let language = $(item).find('p.mb-0').contents().get(2)
//         language = language && language.data.trim()

//         let color = $(item).find('span.repo-language-color').get(0)
//         color = color.attribs.style.match(re)[1]

//         let origin = $(item).find('p.mb-2').contents().get(1)
//         /* istanbul ignore next */
//         origin = origin && origin.attribs.href

//         let owner = $(item).find('.owner').text().trim() || username
//         let forks = $(item).find('a[href$="/network"]').text().trim()

//         result[index] = {
//           repo: $(item).find('.repo').text(),
//           owner,
//           description: $(item).find('.pinned-repo-desc').html().trim(),
//           language: language || /* istanbul ignore next */ undefined,
//           color: color,
//           stars: $(item).find('a[href$="/stargazers"]').text().trim(),
//           forks: forks || 0,
//           origin: origin || undefined
//         }
//       })
//       return result
//     })
// }

// const eeyore = ghPinnedRepos;
module.exports = () => new Promise(resolve => resolve([]))
