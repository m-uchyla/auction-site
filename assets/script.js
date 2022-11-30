      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

        return date;
      }
      
      document.querySelector(".closeIcon").style.display = "none";

      // Set the date we're counting down to
      let randomTime = [];
      for(let i =0;i<7;i++){
        document.getElementById("price"+i).innerHTML=Math.floor(Math.random() * (1000 - 200) + 200)+" ";
        switch(i){
          case 0:
            randomTime[i]=addHours(78,new Date());
            break;
          case 5:
          case 6:
            randomTime[i]=addHours(Math.floor(Math.random() * (56 - 48)) + 48,new Date());;
            break;
          default:
            randomTime[i]=addHours(Math.floor(Math.random() * (48 - 24)) + 24,new Date());;
            break;
        }
      }

      var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

      // Update the count down every 1 second
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date

        let distance = [];

        // Time calculations for days, hours, minutes and seconds
        let days = [];
        let hours = [];
        let minutes = [];
        let seconds = [];

        for(let i =0;i<7;i++){
          
          distance[i] = randomTime[i] - now;

          // Time calculations for days, hours, minutes and seconds
          days[i] = Math.floor(distance[i] / (1000 * 60 * 60 * 24));
          hours[i] = Math.floor((distance[i] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          minutes[i] = Math.floor((distance[i] % (1000 * 60 * 60)) / (1000 * 60));
          seconds[i] = Math.floor((distance[i] % (1000 * 60)) / 1000);

          // Output the result in an element with id="demo"
          document.getElementById("time"+i).innerHTML =
            days[i] + ":" + hours[i] + ":" + minutes[i] + ":" + seconds[i];

          // If the count down is over, write some text
          if (distance[i] < 0) {
            clearInterval(x);
            document.getElementById("time"+i).innerHTML = "EXPIRED";
          }
        }

        // var distance = countDownDate - now;

        // // Time calculations for days, hours, minutes and seconds
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // var hours = Math.floor(
        //   (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        // );
        // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // // Output the result in an element with id="demo"
        // document.getElementById("demo").innerHTML =
        //   days + " : " + hours + " : " + minutes + " : " + seconds;

        // // If the count down is over, write some text
        // if (distance < 0) {
        //   clearInterval(x);
        //   document.getElementById("demo").innerHTML = "EXPIRED";
        // }
      }, 1000);