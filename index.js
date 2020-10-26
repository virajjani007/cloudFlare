const Router = require('./router')




var links = [
  {
    "name": "url1",
    "url": "https://linkur1",
  },
  {
    "name": "url2",
    "url": "https://linkur2",
  },
  {
    "name": "url3",
    "url": "https://linkur3",
  }
];

const json = JSON.stringify(links, null, 4);


/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})


/*
function handler(request) {
    const init = {
        headers: { 'content-type': 'application/json' },
    }
    const body = JSON.stringify({ some: 'json' })
    return new Response(body, init)
}
*/

function handler(request) {
  /*  const init = {
        headers: { 'content-type': 'application/json' },
    }
    */
    const body = JSON.stringify(json, {   
      "content-type": "application/json;charset=UTF-8"    
    })
  }
  







async function handleRequest(request) {
    const r = new Router()
    // Replace with the appropriate paths and handlers
   // r.get('.*/bar', () => new Response('responding for /bar'))
   // r.get('.*/foo', request => handler(request))
    r.get('.*/links.*', request => handler(request))
    //r.get('/demos/router/foo', request => fetch(request)) // return the response from the origin

    r.get('/', () => new Response('Hello worker!')) // return a default message for the root route

    const resp = await r.route(request)
    return resp
}
