const { pubsubFactory } = require("./pubsub.service");

const eventEmitter = pubsubFactory()

export { eventEmitter }