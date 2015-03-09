
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        
        it('has a url', function() {
            for (item in allFeeds) {
                var currentUrl = allFeeds[item].url;
                expect(currentUrl).toBeDefined();
                expect(currentUrl.length).not.toBe(0);
            }
        });
        


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name', function() {
            for (var item in allFeeds) {
                var currentName = allFeeds[item].name;
                expect(currentName).toBeDefined();
                expect(currentName.length).not.toBe(0);
            }
        });

    });


    /* Write a new test suite named "The menu" */
    
    describe('The menu', function() {

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         }); 

         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it('toggles visibility when icon clicked', function() {
         	var menuIcon = $('.menu-icon-link');
         	var body = $('body');
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
         });         
     });

        
                      


    /* Write a new test suite named "Initial Entries" */

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function() {

        beforeEach(function(done) {   
            $('.feed').empty();        // Empty feed container to make sure only new entries are counted               
            init();
            done();
        });

        // Check that there is at least one element inside the .feed container.
        it('sent to .feed container', function() {
            expect($('.feed').length).toBeGreaterThan(0);
        });


    });

    /* Write a new test suite named "New Feed Selection" */


        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

     // Save .feed container as 'this' so that it can be shared by all specs.
     // Empty feed container before each spec.

    describe('New Feed Selection', function() {
        beforeEach(function(done) {
        	this.feedContainer = $('.feed');
        	this.feedContainer.empty(); 
            done();
        });

        
        // Load first feed and check that it is not empty. Save its content as a variable.  

        it('has content', function() {
        	loadFeed(0);
        	expect(this.feedContainer.length).toBeGreaterThan(0);
        	this.firstHtml = this.feedContainer[0];       
        });

        // Load second feed and check that it is not empty. Save its content as a variable.
        // Check that the content of first and second feeds are not the same.

        it('content actually changes', function() {
        	loadFeed(1);
        	expect(this.feedContainer.length).toBeGreaterThan(0);
        	this.secondHtml = this.feedContainer[0];
        	expect(this.firstHtml).not.toEqual(this.secondHtml);
        });         
    });   



}());
