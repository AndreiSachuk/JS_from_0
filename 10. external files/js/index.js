var firstNameId = 'first-name';
    var firstNameEl = document.getElementById(firstNameId);
    var lastNameId = 'last-name';
    var lastNameEl = document.getElementById(lastNameId);
    var addressId = 'address';
    var addressEl = document.getElementById(addressId);
    var citiesId = 'cities';
    var citiesEl = document.getElementById(citiesId);
    var hobbiesId = 'hobbies';
    var hobbiesEl = document.getElementById(hobbiesId);
    var avavarId = 'avatar';
    var avatarEl = document.getElementById(avavarId);

    firstNameEl.value = 'Приветики';
    
  
    // window.alert(firstNameEl.className);
    //lastNameEl.setAttribute('class', 'error-input');

    lastNameEl.className = 'last-name-input default-input error-input';
    avatarEl.src = 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg';
    avatarEl.title = "I'm avatar";
    lastNameEl.title = 'Wrong last name';
    citiesEl.value = "Minsk";