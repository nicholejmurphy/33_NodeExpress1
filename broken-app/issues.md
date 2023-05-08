# Broken App Issues
Main Bug:
[line 13] - Catch is not being passed the error, therefore error was not defined to pass it in next(err).

[Line 2] - set axios variable with const instead of let. Should not be able to be reassigned.
[Line 4] - set app variable with const instead of let. Should not be able to be reassigned.
[Line 8] - I set app.use to use JSON and removed res.json on the return line of the get route.
[Line 12] - set results variable with const instead of let. Should not be able to be reassigned.



Changes Made:
- Added Morgan to track incoming requests
- A POST request doesn't seem appropriate to the use of this request if it is only retrieving information so I changed this to a GET request.
- Rather than having two separate functions to get the user data, and then one to create the desired format, I put this together. Results gets the data and creates the object as it is mapped back.
- This function above was moved into a helper function

