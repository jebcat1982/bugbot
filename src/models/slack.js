
export default {
  register(code, callback) {
    callback(null, true)
  },

  recieveSlashCommand(payload, callback) {
    callback()
    /*
    token=gIkuvaNzQIHg97ATvDxqgjtO
    team_id=T0001
    team_domain=example
    channel_id=C2147483705
    channel_name=test
    user_id=U2147483697
    user_name=Steve
    command=/weather
    text=94070
    response_url=https://hooks.slack.com/commands/1234/5678
    */
  }
///
}
