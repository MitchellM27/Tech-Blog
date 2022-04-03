async function commentsFormHandler(event) {
    event.preventDefault();
  
    const contents = document.querySelector('textarea[name="comment-text"]').value.trim();
  
    const post_id = event.target.getAttribute('data-id');
  
    if (contents) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            contents
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentsFormHandler);