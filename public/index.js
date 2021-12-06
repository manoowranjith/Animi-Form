function validateForm()
{
    const name = document.forms["myForm"]["anime-name"].value;
    const episodes=document.forms["myForm"]["epi-sode"].value;

    if (name == "") {
        alert("Name should not be empty");
        return false;
    }
    else if(name.length<8)
    {
        alert("Name should be minimum of 8 charactes and above");
        return false;
    }

    else if(name.length>14)
    {
        alert("Name should be less than 15 characters");
        return false;
    }

    else if(name.indexOf(' ') >= 0)
    {
        alert("No space is allowed in Animi-name");
        return false;
    }

    else 
    {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(format.test(name))
        {
            alert("Animi-name should not contain special character");
            return false;
        } 
    }

    if(episodes == "")
    {
        alert("Number of episodes should not be empty");
        return false;
    }

    else if(!episodes.match(/^[0-9]+$/))
    {
        alert("Number of episodes should only contain numbers");
        return false;
    }
    
}