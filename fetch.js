"use strict";

/**
 * Web Dev Simplified - Learn Fetch API in 6 minutes
 * youtube.com
 */


// function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>
// fetch('https://reqres.in/api/users')

// fetch can be used with async-await, or then-catch
fetch('https://reqres.in/api/users')
  .then(res => console.log(res))