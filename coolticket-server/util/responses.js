module.exports = {
  200: {
    success: true,
    msg:
      'An entity corresponding to the requested resource is sent in the response',
    data: [
      {
        url: 'https://httpstatusdogs.com/200-ok',
        description:
          'In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request the response will contain an entity describing or containing the result of the action.'
      }
    ]
  },
  201: {
    success: true,
    msg:
      'The request has been fulfilled and resulted in a new resource being created',
    data: [
      {
        url: 'https://httpstatusdogs.com/201-created',
        description:
          'The request has been fulfilled, resulting in the creation of a new resource.'
      }
    ]
  },
  202: {
    success: true,
    msg: 'The request has been accepted for processing.',
    data: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6540479079/in/album-72157628409467125/',
        description:
          ' The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.'
      }
    ]
  },
  204: {
    success: true,
    msg:
      'The server successfully processed the request and is not returning any content.',
    data: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6547319943/in/album-72157628409467125/',
        description:
          'The 204 status code is usually sent out in response to a PUT, POST, or DELETE request when the REST API declines to send back any status message or representation in the response message’s body.'
      }
    ]
  },
  304: {
    success: true,
    msg: 'The resource has not been modified since last requested.',
    data: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6540551929/in/album-72157628409467125/',
        description:
          ' there is no need to retransmit the resource since the client still has a previously-downloaded copy.'
      }
    ]
  },
  400: {
    success: false,
    msg:
      'The server cannot or will not process the request due to an apparent client error',
    errors: [
      {
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkRxfR6GkCpQknCmuAjfPzVdPRQnJIxY6qGwWyhqqaDKi69qikw',
        description: 'The request cannot be fulfilled due to bad syntax'
      }
    ]
  },
  401: {
    success: false,
    msg: 'authentication is possible but has failed or not yet been provided',
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6508023065/in/album-72157628409467125/',
        description:
          'The user does not have valid authentication credentials for the target resource.'
      }
    ]
  },
  402: {
    success: false,
    msg:
      'Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. ',
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6513001321/in/album-72157628409467125/',
        description: 'I wish to use this code to ask for a coffee or a tip.'
      }
    ]
  },
  403: {
    success: false,
    msg: 'The request was valid, but the server is refusing action.',
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6508023617/in/album-72157628409467125/',
        description:
          ' The user might not have the necessary permissions for a resource, or may need an account of some sort.'
      }
    ]
  },
  404: {
    success: false,
    msg:
      'The requested resource could not be found but may be available in the future. ',
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6508022985/in/album-72157628409467125/',
        description:
          'No indication is given of whether the condition is temporary or permanent. '
      }
    ]
  },
  409: {
    success: false,
    msg:
      'Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates.',
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6508023259/in/album-72157628409467125/',
        description: 'For example, there is a guy with that ID, and is me.'
      }
    ]
  },
  422: {
    sucess: false,
    msg:
      'Request is well-formed, however, due to semantic errors it is unable to be processed. Validation errors'
  },
  500: {
    success: false,
    msg:
      'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.',
    errors: [
      {
        url:
          'https://www.flickr.com/photos/girliemac/6509400855/in/album-72157628409467125/',
        description: 'The server failed to fulfill a request.'
      }
    ]
  }
}
