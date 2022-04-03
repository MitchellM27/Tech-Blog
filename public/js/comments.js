const commentsFormHandler = async (event) => {
    event.preventDefault();
  
    const contents = document.querySelector('textarea[name="comment-text"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
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
  };

// document.addEventListener("DOMContentLoaded", function(event) {

//   const delButtonHandler = async (event) => {
//     event.preventDefault();
//     let id = event.target.id.replaceAll(/\D/g, "");
  
//     const response = await fetch(`/api/comments/${id}`, {
//       method: 'DELETE',
//      });
  
//     if (response.ok) {
//        document.location.reload();
//     } else {
//        alert('Failed to delete comment');
//     }
//     document.querySelector('.comment-delete').addEventListener('click', delButtonHandler);
//   };
// });

  document.querySelector('.comment-form').addEventListener('submit', commentsFormHandler);