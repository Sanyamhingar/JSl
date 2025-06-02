//stack memory are used in primitive datatypes
//heap memory are used in non-primitive datatypes

// in stack there is copy of another var
// in heap we get same ref if we copy the var

let youtubename  = "sanyamhingar";


let anotheryoutubename = youtubename;


anotheryoutubename = "sanyamjain";


let Cdetails = {
    Name : Sanyam,
    Age : 21
}

let Cdetails2 = Cdetails;

Cdetails2 = {
    Name: Hingar
}

console.log(Cdetails2);