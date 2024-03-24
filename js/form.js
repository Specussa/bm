// start autosize textarea
autosize(document.querySelectorAll('textarea'));
// end autosize textarea

// start mask phone
const phone_input = document.querySelector('[data-phone-pattern]');
if (phone_input) {
  document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
      var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = '';
          return;
        }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  });
}
// end mask phone

const finputs = document.querySelectorAll(".form__input");
for (i = 0; i < finputs.length; i++) {
  finputs[i].addEventListener("input", updateformValue);
  finputs[i].nextElementSibling.children[1].textContent = finputs[i].getAttribute('maxl');
}

function updateformValue() {
  this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
  if (this.value.length < this.getAttribute('minl')) {
    this.parentElement.classList.add('error');
    this.parentElement.classList.remove('success');
    this.nextElementSibling.classList.remove('success');
  } else {
    this.parentElement.classList.remove('error');
    this.parentElement.classList.add('success');
    this.nextElementSibling.classList.add('success');
  }
}

function isFormEmailValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__control success';
}

function setSelectErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__select error';
}

function setSelectSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__select success';
}

// start validate form vacancy
const formvacancy = document.getElementById('form__vacancy');
if(formvacancy) {
  const vacancyusername = document.getElementById('form__vacancy_username');
  const vacancyemail = document.getElementById('form__vacancy_email');
  const vacancytext = document.getElementById('form__vacancy_text');
  const vacancyphone = document.getElementById('form__vacancy_phone');
  const vacancyfile = document.getElementById('form__vacancy_file');
  const vacancyusernameMin = vacancyusername.getAttribute('minl');
  const vacancyusernameMax = vacancyusername.getAttribute('maxl');
  const vacancyemailMin = vacancyemail.getAttribute('minl');
  const vacancyemailMax = vacancyemail.getAttribute('maxl');
  const vacancytextMin = vacancytext.getAttribute('minl');
  const vacancytextMax = vacancytext.getAttribute('maxl');
  const vacancyphoneMin = vacancyphone.getAttribute('minl');
  const vacancyphoneMax = vacancyphone.getAttribute('maxl');
  vacancyusername.oninput = function(){
    this.value = this.value.substr(0, vacancyusernameMax);
    this.value = this.value.replace(/[0-9]/g, '');
    this.value = this.value.replace(/[()!?•—@:,'";№\-_=« »<>%#~`&\/\$\^\.\*\+\\\{\}\[\]\(\|]$/g, '')
  }
  vacancyemail.oninput = function(){
    this.value = this.value.substr(0, vacancyemailMax);
    this.value = this.value.replace(/[()!?•—:,'";№\-_=« »<>%#~`&\/\$\^\*\+\\\{\}\[\]\(\|]$/g, '')
  }
  vacancytext.oninput = function(){
    this.value = this.value.substr(0, vacancytextMax);
    this.value = this.value.replace(/[•@:'";№\-_=« »<>%#~`&\/\$\^\*\+\\\{\}\[\]\(\|]$/g, '')
  }
  vacancyphone.oninput = function(){this.value = this.value.substr(0, vacancyphoneMax);}
  vacancyemail.addEventListener('input', function () {
    const vacancyemailValid = vacancyemail.value.trim();
    this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else if (!isFormEmailValid(vacancyemailValid)) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  })

  formvacancy.addEventListener('submit', e => {
    e.preventDefault();
    checkCareerInputs();
  });

  function checkCareerInputs() {
    const vacancyusernameValue = vacancyusername.value.trim();
    const vacancyemailValue = vacancyemail.value.trim();
    const vacancytextValue = vacancytext.value.trim();
    const vacancyphoneValue = vacancyphone.value.trim();
    const vacancyfileValue = vacancyfile.value.trim();
  
    if(vacancyusernameValue !== '' && vacancyusernameValue.length >= vacancyusernameMin && vacancyusernameValue.length <= vacancyusernameMax) {
      setSuccessFor(vacancyusername);
    } else {
      setErrorFor(vacancyusername);
    }
    if(!isFormEmailValid(vacancyemailValue)) {
      setErrorFor(vacancyemail);
    } else if (vacancyemailValue !== '' && vacancyemailValue.length >= vacancyemailMin && vacancyemailValue.length <= vacancyemailMax) {
      setSuccessFor(vacancyemail);
    } else {
      setErrorFor(vacancyemail);
    }
    if(vacancyphoneValue !== '' && vacancyphoneValue.length >= vacancyphoneMin && vacancyphoneValue.length <= vacancyphoneMax) {
      setSuccessFor(vacancyphone);
    } else {
      setErrorFor(vacancyphone);
    }
    if(vacancytextValue !== '' && vacancytextValue.length >= vacancytextMin && vacancytextValue.length <= vacancytextMax) {
      setSuccessFor(vacancytext);
    } else if(vacancyfileValue !== '') {
      setSuccessFor(vacancytext);
    } else {
      setErrorFor(vacancytext);
    }
  
    if(!isFormEmailValid(vacancyemailValue)) {
      setErrorFor(vacancyemail);
    } else if(vacancyusernameValue !== '' && vacancyusernameValue.length >= vacancyusernameMin && vacancyusernameValue.length <= vacancyusernameMax && 
    vacancyemailValue === '' && vacancyemailValue.length >= vacancyemailMin && vacancyemailValue.length <= vacancyemailMax && 
    vacancytextValue !== '' && vacancytextValue.length >= vacancytextMin && vacancytextValue.length <= vacancytextMax && 
    vacancyphoneValue !== '' && vacancyphoneValue.length >= vacancyphoneMin && vacancyphoneValue.length <= vacancyphoneMax) {
      formvacancy.classList.add("hidden");
      document.getElementById('form__successfully_form__vacancy').classList.add("active");
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          one: vacancyusernameValue,
          two: vacancyemailValue,
          three: vacancytextValue,
          four: vacancyphoneValue,
          five: vacancyfileValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    } else if(vacancyusernameValue !== '' && vacancyusernameValue.length >= vacancyusernameMin && vacancyusernameValue.length <= vacancyusernameMax && 
    vacancyemailValue !== '' && vacancyemailValue.length >= vacancyemailMin && vacancyemailValue.length <= vacancyemailMax &&  
    vacancyphoneValue !== '' && vacancyphoneValue.length >= vacancyphoneMin && vacancyphoneValue.length <= vacancyphoneMax && 
    vacancyfileValue !== '') {
      formvacancy.classList.add("hidden");
      document.getElementById('form__successfully_form__vacancy').classList.add("active");
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          one: vacancyusernameValue,
          two: vacancyemailValue,
          three: vacancytextValue,
          four: vacancyphoneValue,
          five: vacancyfileValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    }
  }

  var filesToUpload = [];
  const fileInput = document.getElementById('form__vacancy_file');
  const fileContainer = document.getElementById('form__file_container');

  function filesObserver(el, callback){
      var done = function (){callback(el);};
      var observer = new MutationObserver(done);
      observer.observe(el, {childList: true, characterDataOldValue: true});
  };

  filesObserver(fileContainer, function (){
    if (fileContainer.children[1]) {
      fileContainer.children[0].remove();
    }
  });

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0';
    } else {
      var k = 1024;
      var dm = decimals < 0 ? 0 : decimals;
      var sizes = ['B', 'Kb', 'Mb', 'Gb', 'Tb'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }

  fileInput.addEventListener('change', (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let myFile = e.target.files[i];
      let myFileID = "FID" + (1000 + Math.random() * 9000).toFixed(0);
      let myFileSize = formatBytes(e.target.files[i].size);

      filesToUpload.push({
        file: myFile,
        FID: myFileID,
        filesize: myFileSize
      });
    };
    displayFiles();
    // e.target.value = null;
  });

  function removeFile(x) {
    fileInput.value = "";
    fileContainer.children[0].remove();
    // for (let i = 0; i < filesToUpload.length; i++) {
    //   if (filesToUpload[i].FID === x) {
    //     filesToUpload.splice(i, 1);
    //   }
    // }
    // displayFiles();
  }

  function displayFiles() {
    fileContainer.innerHTML = "";
    for (let i = 0; i < filesToUpload.length; i++) {
      fileContainer.innerHTML += `<li class="form__file_item"><span class="form__file_name">${filesToUpload[i].file.name}</span><span class="form__file_size">${filesToUpload[i].filesize}</span><a onclick="removeFile('${filesToUpload[i].FID}')"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L12 12M12 12L17 7.00001M12 12L7 7M12 12L17 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>`;
    }
  }
}
// end validate form vacancy