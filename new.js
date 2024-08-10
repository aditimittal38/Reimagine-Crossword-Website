function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  let currentOpenPart = null;
  
  function closeUser() {
    const usersignin = document.getElementById("usersignin");
    usersignin.style.opacity = "0";
    setTimeout(() => {
        usersignin.style.display = "none";
    }, 0); 
  }
  
  function openUser() {
    closeCurrentPart();
    
    const usersignin = document.getElementById("usersignin");
    usersignin.style.display = "block";
    setTimeout(() => {
        usersignin.style.opacity = "1";
    }, 0); 
    currentOpenPart = "usersignin";
    setTimeout(closeUser, 10000); 
  }
  
  function closeLike() {
    const userlike = document.getElementById("userlike");
    userlike.style.opacity = "0";
    setTimeout(() => {
        userlike.style.display = "none";
    }, 0);
  }
  
  function openLike() {
    closeCurrentPart(); 
    
    const userlike = document.getElementById("userlike");
    userlike.style.display = "block";
    setTimeout(() => {
        userlike.style.opacity = "1";
    }, 0); 
    
    currentOpenPart = "userlike"; 
    setTimeout(closeLike, 10000); 
  }
  
  function closeCart() {
    const usercart = document.getElementById("usercart");
    usercart.style.opacity = "0";
    setTimeout(() => {
        usercart.style.display = "none";
    }, 0); 
  }
  
  function openCart() {
    closeCurrentPart(); 
    
    const usercart = document.getElementById("usercart");
    usercart.style.display = "block";
    setTimeout(() => {
        usercart.style.opacity = "1";
    }, 0);
    
    currentOpenPart = "usercart";
    setTimeout(closeCart, 10000); 
  }
  
  function closeSearch() {
    const usersearch = document.getElementById("usersearch");
    usersearch.style.opacity = "0";
    setTimeout(() => {
        usersearch.style.display = "none";
    }, 0); // matches the transition duration
  }
  
  function openSearch() {
    closeCurrentPart(); 
    
    const usersearch = document.getElementById("usersearch");
    usersearch.style.display = "block";
    setTimeout(() => {
        usersearch.style.opacity = "1";
    }, 0); 
    
    currentOpenPart = "usersearch"; 
    setTimeout(closeSearch, 30000);
  }
  
  function closeCurrentPart() {
    if (currentOpenPart) {
        switch (currentOpenPart) {
            case "usersignin":
                closeUser();
                break;
            case "userlike":
                closeLike();
                break;
            case "usercart":
                closeCart();
                break;
            case "usersearch":
                closeSearch();
                break;
        }
        currentOpenPart = null; 
    }
  }
  
  document.getElementById('con1').addEventListener('click', function() {
    document.getElementById('container1').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.getElementById('con2').addEventListener('click', function() {
    document.getElementById('container2').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('con3').addEventListener('click', function() {
  document.getElementById('container3').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.getElementById('con4').addEventListener('click', function() {
  document.getElementById('container4').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('con5').addEventListener('click', function() {
  document.getElementById('container5').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.getElementById('con6').addEventListener('click', function() {
  document.getElementById('container6').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('con7').addEventListener('click', function() {
  document.getElementById('container7').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('con8').addEventListener('click', function() {
  document.getElementById('poojabestseller').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('con9').addEventListener('click', function() {
  document.getElementById('adv_container').scrollIntoView({ behavior: 'smooth' });
  });
  