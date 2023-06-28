

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {

});


async function Post() {

  var spinner = document.getElementById("myspinner");
  spinner.classList.remove("d-none");



  var files1 = document.getElementById("uploadFile1").files;
  var files2 = document.getElementById("uploadFile2").files;


 


    var formData = new FormData();

    for (var i = 0; i < files1.length; i++) {
      var fileInfo = {
        name: files1[i].name,
        size: files1[i].size,
        type: files1[i].type
      };
      formData.append("file1" + i, files1[i]);
      formData.append("file1Info" + i, JSON.stringify(fileInfo));
    }

    for (var i = 0; i < files2.length; i++) {
      var fileInfo = {
        name: files2[i].name,
        size: files2[i].size,
        type: files2[i].type
      };
      formData.append("file2" + i, files2[i]);
      formData.append("file2Info" + i, JSON.stringify(fileInfo));
    }

    const url = `./WeatherForecast`;
    const params = {
      method: "POST",
      body: formData
    };

    const response = await fetch(url, params);

    if (response.ok) {
      const data = await response.text();
      console.log(data);
      document.getElementById("preview").innerHTML = "הקבצים נשלחו בהצלחה!";
    } else {
      const errors = await response.text();
      console.log(errors);
      document.getElementById("preview").innerHTML = "Error!";
    }

    spinner.classList.add("d-none");

  }

//שורת קוד זו מבטיחה שהקוד מבוצע במצב קפדני.
"use strict";
//שורת הקוד הזו מכריזה על פונקציה בשם 
//dragNdrop
//המקבלת פרמטר מסוג אירוע
function dragNdrop1(event) {
  //שורת קוד זו מכריזה על משתנה בשם x
  //מתוך התוכן הקיים בתגית בעלת ID uploadFile
  var x = document.getElementById("uploadFile1");
  //החרזת משתנה טקסט ריק
  var txt = "";
  //בדיקה של הקבצים הקיים במשתנה X
  if ('files' in x) {
    //אם האורך שווה ל- 0
    if (x.files.length == 0) {
      //תרשום בחירת קובץ אחד או יותר
      txt = "Select one or more files.";
    } else {
      //לולאה שועברת על כל הקבצים ומדפיסה את שמם
      for (var i = 0; i < x.files.length; i++) {
        txt += "<strong> files" + (i + 1) + "</strong>";
        var file = x.files[i];
        if ('name' in file) {
          txt += file.name + "<br>";
        }
      }
    }
  }
  //כתיבת התוכן שנשמר בתוך TXT
  //בתגית בעלת ה ID PREVIEW
  document.getElementById("preview1").innerHTML = txt;
  document.getElementById("docu1").src = "images/document.svg";
}

//שורת קוד זו מבטיחה שהקוד מבוצע במצב קפדני.
"use strict";
//שורת הקוד הזו מכריזה על פונקציה בשם 
//dragNdrop
//המקבלת פרמטר מסוג אירוע
function dragNdrop2(event) {
  //שורת קוד זו מכריזה על משתנה בשם x
  //מתוך התוכן הקיים בתגית בעלת ID uploadFile
  var x = document.getElementById("uploadFile2");
  //החרזת משתנה טקסט ריק
  var txt = "";
  //בדיקה של הקבצים הקיים במשתנה X
  if ('files' in x) {
    //אם האורך שווה ל- 0
    if (x.files.length == 0) {
      //תרשום בחירת קובץ אחד או יותר
      txt = "Select one or more files.";
    } else {
      //לולאה שועברת על כל הקבצים ומדפיסה את שמם
      for (var i = 0; i < x.files.length; i++) {
        txt += "<strong> files" + (i + 1) + "</strong>";
        var file = x.files[i];
        if ('name' in file) {
          txt += file.name + "<br>";
        }
      }
    }
  }
  //כתיבת התוכן שנשמר בתוך TXT
  //בתגית בעלת ה ID PREVIEW
  document.getElementById("preview2").innerHTML = txt;
  document.getElementById("docu2").src = "images/document.svg";

}

//קוד זה משמש לשינוי המחלקה של אלמנט עם המזהה של "uploadFile"
//בעת מצב גרירה
function drag(num) {
  document.getElementById('uploadFile' + num).parentNode.className = 'draging dragBox';
}
//קוד זה משמש לשינוי המחלקה של אלמנט עם המזהה של "uploadFile"
//בעת מצב עזיבה העכבר
function drop(num) {
  console.log(this);
  document.getElementById('uploadFile' + num).parentNode.className = 'dragBox';
  // this.parentNode.className = 'dragBox';
}





