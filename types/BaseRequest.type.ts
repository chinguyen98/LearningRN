type BaseRequest = {
  /**
   * Using AbortController to cancel request
   *
   * @type {AbortSignal}
   */
  signal?: AbortSignal;
};

export default BaseRequest;
