document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Display confirmation message
    document.getElementById('confirmation').style.display = 'block';
    
    // Reset form
    this.reset();
});