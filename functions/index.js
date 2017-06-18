const functions = require('firebase-functions')
const admin = require('firebase-admin')
const slack = require('slack')

const SLACK = functions.config().slack
const SLACK_MESSAGE_LIFETIME = 120000

admin.initializeApp(functions.config().firebase)

const sendToSlack = text => {
  const message = {
    token: SLACK.token,
    channel: SLACK.channel,
    as_user: true,
    text: text,
  }

  console.log(message)

  slack.chat.postMessage(message, (err, data) => {
    console.log(err, data)
    message.ts = data.ts
    console.log('[SLACK] new message', message)
    setTimeout(() => {
      slack.chat.delete(message, (err, data) => {
        console.log('[SLACK] removed message', message)
      })
    }, SLACK_MESSAGE_LIFETIME)
  })
}

exports.newMessage = functions.database.ref('new/message/{id}').onWrite(e => {
  const input = e.data.val()
  const now = Date.now()
  const id = e.params.id

  // sendToSlack(input.content) // needs paid firebase plan :()

  return admin.database().ref('messages/' + id).set({
    content: input.content,
    unixTimeStamp: now,
  }).then(_ => {
    e.data.ref.remove()
  })
})
