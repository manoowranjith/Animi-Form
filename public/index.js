function errorcall_name(x)
{
    document.getElementById("message_name").innerHTML=x;
}
function errorcall_episode(x)
{
    document.getElementById("message_episode").innerHTML=x;
}
function validateForm()
{
    const name = document.forms["myForm"]["anime-name"].value;
    const episodes=document.forms["myForm"]["epi-sode"].value;

    if (name == "") {
        // document.getElementById("message").innerHTML="*Name should not be empty";
        // document.getElementById("btn").disable=true;
        // alert("Name should not be empty");
        errorcall_name("*Name should not be empty")
        return false;
    }
    else if(name.length<8)
    {
        // alert("Name should be minimum of 8 charactes and above");
        errorcall_name("*Name should be minimum of 8 charactes and above");
        return false;
    }

    else if(name.length>14)
    {
        errorcall_name("*Name should be less than 15 characters")
        // alert("Name should be less than 15 characters");
        return false;
    }

    else if(name.indexOf(' ') >= 0)
    {
        errorcall_name("*No space is allowed in Animi-name")
        // alert("No space is allowed in Animi-name");
        return false;
    }

    else 
    {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(format.test(name))
        {
            errorcall_name("*Animi-name should not contain special character")
            // alert("Animi-name should not contain special character");
            return false;
        } 
    }

    if(!episodes.match(/^[0-9]+$/))
    {
        errorcall_episode("*Number of episodes should only contain numbers")
        // alert("Number of episodes should only contain numbers");
        return false;
    }
    
}