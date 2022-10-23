fetch('./data.json')
        // .then(response => response.json())
        // .then(data => { 
        //     console.log(data)
        .then (function(response){
            return response.json();
        })
    // }}

    
        .then(function(data){

           
        for (var i=0;i<data.length;i++) {

          
           document.getElementById("data").innerHTML +=
           
           
           data[i].basics.name + "<br/>"+ 
           data[i].basics.AppliedFor + "<br/>" +
           data[i].basics.image + "<br/>" +
           data[i].basics.email + "<br/>" +
           data[i].basics.phone + "<br/>" +
           data[i].basics.location.address + "<br/>" +
           data[i].basics.location.postalCode + "<br/>" +
           data[i].basics.location.city + "<br/>" +
           data[i].basics.profiles.network + "<br/>" +
           data[i].basics.profiles.url + "<br/>" +
           

           data[i].skills.name + "<br/>"+ 
           data[i].skills.level + "<br/>"+ 
           data[i].skills.keywords + "<br/>" +

           data[i].work.CompanyName + "<br/>" +
           data[i].work.position + "<br/>" +
           data[i].work.StartDate + "<br/>"+
           data[i].work.EndDate + "<br/>" +
           data[i].work.Summary + "<br/>"+

           data[i].Internship.CompanyName + "<br/>"+
           data[i].Internship.position + "<br/>" +
           data[i].Internship.StartDate + "<br/>"+
           data[i].Internship.EndDate + "<br/>" +
           data[i].Internship.Summary + "<br/>"+

           data[i].projects.name + "<br/>"+
           data[i].projects.description + "<br/>"+


           data[i].education.UG.institute + "<br/>"+
           data[i].education.UG.course + "<br/>"+
           data[i].education.UG.StartDate + "<br/>"+
           data[i].education.UG.EndDate + "<br/>"+
           data[i].education.UG.cgpa + "<br/>"+

           data[i].education.SeniorSecondary.institute + "<br/>"+
           data[i].education.SeniorSecondary.cgpa + "<br/>"+

           data[i].education.HighSchool.institute + "<br/>"+
           data[i].education.HighSchool.cgpa + "<br/>"+

           data[i].achievements.summary + "<br/>"+

           data[i].interests.hobbies + "<br/>"
         

        }
    })

    function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
