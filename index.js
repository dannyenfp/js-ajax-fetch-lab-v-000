function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  
  
  return '911f0764acb7162bae453c4d6819b3104b122c5';
}

function forkRepo() {
  //use fetch to fork it!
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	} 
  }).then(res => res.json()).then(json => showResults(json));
// 

//repos/:owner/:repo/forks  

//'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
    json.html_url
  }</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}

//b3_5 lol
