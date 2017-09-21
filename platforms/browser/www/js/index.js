/* 
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};







$( document ).ready(function() {
  
   
    var date = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var weekday = weekdays[date.getDay()];
    var month = monthName[date.getMonth()];
    var day = date.getUTCDate();
   
     setInterval( function() {
    // Create a newDate() object and extract the hours of the current time on the visitor's
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
       
       
    $(".main-page__week-day").html(weekday);
    $(".main-page-date__month").html(month);
    $(".main-page-date__count").html(day);
    $(".main-page__time").html(( hours < 10 ? "0" : "" ) + hours + ":" + (minutes< 10 ? "0" : "") + minutes);
    }, 1000);
    
    
    
    $('#main-page__door-icon-exit').click(function(){
  $('.pulse-text').empty();
  $(".pulse").css('background-color','red');
  $(".pulse-text").html("OPEN CARD");
});

$('#main-page__door-icon-entry').click(function(){
  $('.pulse-text').empty();
  $(".pulse").css('background-color','green');
  $(".pulse-text").html("CLOSE CARD");
});

$(".pulse").on('click', function(event){
    
    var date = new Date();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var time = (hours > 12) ? (hours-12 + ':' + (minutes< 10 ? "0" : "") + minutes ) : (hours + ':' + (minutes< 10 ? "0" : "") + minutes );
    
    
    var weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    var monthName = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    var weekday = weekdays[date.getDay()];
    var month = monthName[date.getMonth()];
    var day = date.getUTCDate();
    var ampm = (hours >= 12) ? "PM" : "AM";
    
    
    $(".main-page__down-info-time-am").html(ampm);
    $(".main-page__down-info-time-hour").html(time);
    $(".main-page__down-info-time-hour").html(time);
    $(".main-page__down-info-time-down").html(weekday + " " + day + "," + " " + month );
    
    if($('.main-page__down-info').css('display') == 'none'){
        $(".main-page__down-info").slideDown( "slow", function(){
        $(".main-page__down-info").css({'display':'block'});
    });
   
    }
    else {
    $(".main-page__down-info").animate({'top': '50px', 'opacity': '0'}, 400);
    $(".main-page__down-info").css({'display':'block'});
    setTimeout(function(){ $(".main-page__down-info").css({'display':'none', 'opacity': '1', 'top': '0px' }); },600)
    setTimeout(function(){ $(".main-page__down-info").slideDown( "slow", function(){
        $(".main-page__down-info").css({'display':'block'});
    }); },600)
       
    }
              
});

    
    
    
    
    
});