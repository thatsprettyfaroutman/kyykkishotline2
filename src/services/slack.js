import slack from 'slack'

const SLACK_MESSAGE_LIFETIME = 20000

export const sendMessageToSlack = text => {
  const message = {
    token: process.env.REACT_APP_SLACK_TOKEN,
    channel: process.env.REACT_APP_SLACK_CHANNEL,
    as_user: true,
  }

  slack.chat.postMessage({...message, text}, (err, data) => {
    if (!data) {
      // console.warn(err)
      return
    }

    setTimeout(() => {
      slack.chat.delete({...message, ts: data.ts, channel: data.channel}, (err, data) => {
        // console.log('[SLACK] removed message', data)
      })
    }, SLACK_MESSAGE_LIFETIME)
  })
}
