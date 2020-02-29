const biodata = ()=> {
    
    // membuat objek
    const dataLengkap = [{
          name : "Audy Wisuda Pratama",
          age : 23,
          address : "Jalan MS Batu Bara GG. Akasia no 12 LK.1 Kupang. Teba Teluk Betung Utara. Lampung ",
          hobbies : ["coding","music","Basket","Fingerstyle"],
          is_married  : false,
          list_school : [{
                    name: "SMAN8 B.Lampung",
                    year_in:"2011",
                    year_out:"2014",
                    major: null
                }],
          skills : [{
                    skill_name: "HTML",
                    level: "advanced"
                },
                {
                    skill_name: "CSS",
                    level: "advanced"
                },
                {
                    skill_name: "js",
                    level: "beginner"
                },
                {
                    skill_name: "PHP",
                    level: "beginner"
                }],
          interest_in_coding : true
        }]

        const data = JSON.stringify(dataLengkap);
        return data

}

console.log(biodata())