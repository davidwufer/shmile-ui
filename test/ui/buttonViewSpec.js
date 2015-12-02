describe('ButtonView', function() {
	beforeEach(function() {
		this.startEl = $(document).append('<button id="start-button">Start</button>');
		this.fsm = {};
		this.channel = {}
		_.extend(this.channel, Backbone.Events);
		this.subject = new ButtonView(this.fsm, this.channel);
	});

	describe('render', function() {
		it("positions and hides the button", function() {
			this.subject.render();
			expect(this.startEl.is(":visible")).toEqual(false);
			expect(this.startEl.css('top')).toEqual('');
		});

		it('triggers a "ui_button_pressed" event when clicked', function(done) {
			this.channel.on('ui_button_pressed', function() { done(); });
			this.subject.render();
			this.startEl.click();
		});
	});

	describe('fadeIn', function() {
		it('makes the button visible', function() {
			this.subject.render();
			expect(this.startEl.is(':visible')).toEqual(false);
			this.subject.fadeIn();
			expect(this.startEl.is(':visible')).toEqual(true);
		});
	});
});
