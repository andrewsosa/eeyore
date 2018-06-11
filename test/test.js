const test = require('ava')

const eeyore = require('..')

test('Grabs some repositories', async t => {
  let repos = await eeyore('andrewsosa')

  if (repos) t.pass('We hit something!')
  else t.fail('Something wrong happened.')
})

test('Gracefully handles no pins', async t => {
  let repos = await eeyore('ACMatFSU')
  if (Array.isArray(repos) && repos.length === 0) t.pass('OK!')
  else t.fail('Did @ACMatFSU add pins?')
})
