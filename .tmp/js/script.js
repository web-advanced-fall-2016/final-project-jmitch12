'use strict'; //Initialize JS Library 
$(document).ready(function () {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['Play', 'Learn', 'Teach'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: false,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['#e6e7e8'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function onLeave(index, nextIndex, direction) {},
        afterLoad: function afterLoad(anchorLink, index) {},
        afterRender: function afterRender() {},
        afterResize: function afterResize() {},
        afterResponsive: function afterResponsive(isResponsive) {},
        afterSlideLoad: function afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) {} });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZ1bGxwYWdlIiwibWVudSIsImxvY2tBbmNob3JzIiwiYW5jaG9ycyIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uUG9zaXRpb24iLCJuYXZpZ2F0aW9uVG9vbHRpcHMiLCJzaG93QWN0aXZlVG9vbHRpcCIsInNsaWRlc05hdmlnYXRpb24iLCJzbGlkZXNOYXZQb3NpdGlvbiIsImNzczMiLCJzY3JvbGxpbmdTcGVlZCIsImF1dG9TY3JvbGxpbmciLCJmaXRUb1NlY3Rpb24iLCJmaXRUb1NlY3Rpb25EZWxheSIsInNjcm9sbEJhciIsImVhc2luZyIsImVhc2luZ2NzczMiLCJsb29wQm90dG9tIiwibG9vcFRvcCIsImxvb3BIb3Jpem9udGFsIiwiY29udGludW91c1ZlcnRpY2FsIiwiY29udGludW91c0hvcml6b250YWwiLCJzY3JvbGxIb3Jpem9udGFsbHkiLCJpbnRlcmxvY2tlZFNsaWRlcyIsImRyYWdBbmRNb3ZlIiwib2Zmc2V0U2VjdGlvbnMiLCJyZXNldFNsaWRlcnMiLCJmYWRpbmdFZmZlY3QiLCJub3JtYWxTY3JvbGxFbGVtZW50cyIsInNjcm9sbE92ZXJmbG93Iiwic2Nyb2xsT3ZlcmZsb3dSZXNldCIsInNjcm9sbE92ZXJmbG93T3B0aW9ucyIsInRvdWNoU2Vuc2l0aXZpdHkiLCJub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQiLCJiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uIiwia2V5Ym9hcmRTY3JvbGxpbmciLCJhbmltYXRlQW5jaG9yIiwicmVjb3JkSGlzdG9yeSIsImNvbnRyb2xBcnJvd3MiLCJ2ZXJ0aWNhbENlbnRlcmVkIiwic2VjdGlvbnNDb2xvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZml4ZWRFbGVtZW50cyIsInJlc3BvbnNpdmVXaWR0aCIsInJlc3BvbnNpdmVIZWlnaHQiLCJyZXNwb25zaXZlU2xpZGVzIiwic2VjdGlvblNlbGVjdG9yIiwic2xpZGVTZWxlY3RvciIsImxhenlMb2FkaW5nIiwib25MZWF2ZSIsImluZGV4IiwibmV4dEluZGV4IiwiZGlyZWN0aW9uIiwiYWZ0ZXJMb2FkIiwiYW5jaG9yTGluayIsImFmdGVyUmVuZGVyIiwiYWZ0ZXJSZXNpemUiLCJhZnRlclJlc3BvbnNpdmUiLCJpc1Jlc3BvbnNpdmUiLCJhZnRlclNsaWRlTG9hZCIsInNsaWRlQW5jaG9yIiwic2xpZGVJbmRleCIsIm9uU2xpZGVMZWF2ZSIsIm5leHRTbGlkZUluZGV4Il0sIm1hcHBpbmdzIjoiY0FBQTtBQUNBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QkYsTUFBRSxXQUFGLEVBQWVHLFFBQWYsQ0FBd0I7QUFDcEI7QUFDQUMsY0FBTSxPQUZjO0FBR3BCQyxxQkFBYSxLQUhPO0FBSXBCQyxpQkFBUSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLENBSlk7QUFLcEJDLG9CQUFZLEtBTFE7QUFNcEJDLDRCQUFvQixPQU5BO0FBT3BCQyw0QkFBb0IsQ0FBQyxZQUFELEVBQWUsYUFBZixDQVBBO0FBUXBCQywyQkFBbUIsS0FSQztBQVNwQkMsMEJBQWtCLEtBVEU7QUFVcEJDLDJCQUFtQixRQVZDOztBQVlwQjtBQUNBQyxjQUFNLElBYmM7QUFjcEJDLHdCQUFnQixHQWRJO0FBZXBCQyx1QkFBZSxJQWZLO0FBZ0JwQkMsc0JBQWMsSUFoQk07QUFpQnBCQywyQkFBbUIsSUFqQkM7QUFrQnBCQyxtQkFBVyxLQWxCUztBQW1CcEJDLGdCQUFRLGdCQW5CWTtBQW9CcEJDLG9CQUFZLE1BcEJRO0FBcUJwQkMsb0JBQVksS0FyQlE7QUFzQnBCQyxpQkFBUyxLQXRCVztBQXVCcEJDLHdCQUFnQixJQXZCSTtBQXdCcEJDLDRCQUFvQixLQXhCQTtBQXlCcEJDLDhCQUFzQixLQXpCRjtBQTBCcEJDLDRCQUFvQixLQTFCQTtBQTJCcEJDLDJCQUFtQixLQTNCQztBQTRCcEJDLHFCQUFhLEtBNUJPO0FBNkJwQkMsd0JBQWdCLEtBN0JJO0FBOEJwQkMsc0JBQWMsS0E5Qk07QUErQnBCQyxzQkFBYyxLQS9CTTtBQWdDcEJDLDhCQUFzQixzQkFoQ0Y7QUFpQ3BCQyx3QkFBZ0IsS0FqQ0k7QUFrQ3BCQyw2QkFBcUIsS0FsQ0Q7QUFtQ3BCQywrQkFBdUIsSUFuQ0g7QUFvQ3BCQywwQkFBa0IsRUFwQ0U7QUFxQ3BCQywyQ0FBbUMsQ0FyQ2Y7QUFzQ3BCQyxnQ0FBd0IsSUF0Q0o7O0FBd0NwQjtBQUNBQywyQkFBbUIsS0F6Q0M7QUEwQ3BCQyx1QkFBZSxJQTFDSztBQTJDcEJDLHVCQUFlLElBM0NLOztBQTZDcEI7QUFDQUMsdUJBQWUsSUE5Q0s7QUErQ3BCQywwQkFBa0IsSUEvQ0U7QUFnRHBCQyx1QkFBZ0IsQ0FBQyxTQUFELENBaERJO0FBaURwQkMsb0JBQVksS0FqRFE7QUFrRHBCQyx1QkFBZSxNQWxESztBQW1EcEJDLHVCQUFlLGtCQW5ESztBQW9EcEJDLHlCQUFpQixDQXBERztBQXFEcEJDLDBCQUFrQixDQXJERTtBQXNEcEJDLDBCQUFrQixLQXRERTs7QUF3RHBCO0FBQ0FDLHlCQUFpQixVQXpERztBQTBEcEJDLHVCQUFlLFFBMURLOztBQTREcEJDLHFCQUFhLElBNURPOztBQThEcEI7QUFDQUMsaUJBQVMsaUJBQVNDLEtBQVQsRUFBZ0JDLFNBQWhCLEVBQTJCQyxTQUEzQixFQUFxQyxDQUFFLENBL0Q1QjtBQWdFcEJDLG1CQUFXLG1CQUFTQyxVQUFULEVBQXFCSixLQUFyQixFQUEyQixDQUFFLENBaEVwQjtBQWlFcEJLLHFCQUFhLHVCQUFVLENBQUUsQ0FqRUw7QUFrRXBCQyxxQkFBYSx1QkFBVSxDQUFFLENBbEVMO0FBbUVwQkMseUJBQWlCLHlCQUFTQyxZQUFULEVBQXNCLENBQUUsQ0FuRXJCO0FBb0VwQkMsd0JBQWdCLHdCQUFTTCxVQUFULEVBQXFCSixLQUFyQixFQUE0QlUsV0FBNUIsRUFBeUNDLFVBQXpDLEVBQW9ELENBQUUsQ0FwRWxEO0FBcUVwQkMsc0JBQWMsc0JBQVNSLFVBQVQsRUFBcUJKLEtBQXJCLEVBQTRCVyxVQUE1QixFQUF3Q1QsU0FBeEMsRUFBbURXLGNBQW5ELEVBQWtFLENBQUUsQ0FyRTlELEVBQXhCOztBQXVFSCxDQXhFRCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0luaXRpYWxpemUgSlMgTGlicmFyeSBcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcbiAgICAgICAgLy9OYXZpZ2F0aW9uXG4gICAgICAgIG1lbnU6ICcjbWVudScsXG4gICAgICAgIGxvY2tBbmNob3JzOiBmYWxzZSxcbiAgICAgICAgYW5jaG9yczpbJ1BsYXknLCAnTGVhcm4nLCAnVGVhY2gnXSxcbiAgICAgICAgbmF2aWdhdGlvbjogZmFsc2UsXG4gICAgICAgIG5hdmlnYXRpb25Qb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgbmF2aWdhdGlvblRvb2x0aXBzOiBbJ2ZpcnN0U2xpZGUnLCAnc2Vjb25kU2xpZGUnXSxcbiAgICAgICAgc2hvd0FjdGl2ZVRvb2x0aXA6IGZhbHNlLFxuICAgICAgICBzbGlkZXNOYXZpZ2F0aW9uOiBmYWxzZSxcbiAgICAgICAgc2xpZGVzTmF2UG9zaXRpb246ICdib3R0b20nLFxuXG4gICAgICAgIC8vU2Nyb2xsaW5nXG4gICAgICAgIGNzczM6IHRydWUsXG4gICAgICAgIHNjcm9sbGluZ1NwZWVkOiA3MDAsXG4gICAgICAgIGF1dG9TY3JvbGxpbmc6IHRydWUsXG4gICAgICAgIGZpdFRvU2VjdGlvbjogdHJ1ZSxcbiAgICAgICAgZml0VG9TZWN0aW9uRGVsYXk6IDEwMDAsXG4gICAgICAgIHNjcm9sbEJhcjogZmFsc2UsXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEN1YmljJyxcbiAgICAgICAgZWFzaW5nY3NzMzogJ2Vhc2UnLFxuICAgICAgICBsb29wQm90dG9tOiBmYWxzZSxcbiAgICAgICAgbG9vcFRvcDogZmFsc2UsXG4gICAgICAgIGxvb3BIb3Jpem9udGFsOiB0cnVlLFxuICAgICAgICBjb250aW51b3VzVmVydGljYWw6IGZhbHNlLFxuICAgICAgICBjb250aW51b3VzSG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICAgIHNjcm9sbEhvcml6b250YWxseTogZmFsc2UsXG4gICAgICAgIGludGVybG9ja2VkU2xpZGVzOiBmYWxzZSxcbiAgICAgICAgZHJhZ0FuZE1vdmU6IGZhbHNlLFxuICAgICAgICBvZmZzZXRTZWN0aW9uczogZmFsc2UsXG4gICAgICAgIHJlc2V0U2xpZGVyczogZmFsc2UsXG4gICAgICAgIGZhZGluZ0VmZmVjdDogZmFsc2UsXG4gICAgICAgIG5vcm1hbFNjcm9sbEVsZW1lbnRzOiAnI2VsZW1lbnQxLCAuZWxlbWVudDInLFxuICAgICAgICBzY3JvbGxPdmVyZmxvdzogZmFsc2UsXG4gICAgICAgIHNjcm9sbE92ZXJmbG93UmVzZXQ6IGZhbHNlLFxuICAgICAgICBzY3JvbGxPdmVyZmxvd09wdGlvbnM6IG51bGwsXG4gICAgICAgIHRvdWNoU2Vuc2l0aXZpdHk6IDE1LFxuICAgICAgICBub3JtYWxTY3JvbGxFbGVtZW50VG91Y2hUaHJlc2hvbGQ6IDUsXG4gICAgICAgIGJpZ1NlY3Rpb25zRGVzdGluYXRpb246IG51bGwsXG5cbiAgICAgICAgLy9BY2Nlc3NpYmlsaXR5XG4gICAgICAgIGtleWJvYXJkU2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgYW5pbWF0ZUFuY2hvcjogdHJ1ZSxcbiAgICAgICAgcmVjb3JkSGlzdG9yeTogdHJ1ZSxcblxuICAgICAgICAvL0Rlc2lnblxuICAgICAgICBjb250cm9sQXJyb3dzOiB0cnVlLFxuICAgICAgICB2ZXJ0aWNhbENlbnRlcmVkOiB0cnVlLFxuICAgICAgICBzZWN0aW9uc0NvbG9yIDogWycjZTZlN2U4J10sXG4gICAgICAgIHBhZGRpbmdUb3A6ICczZW0nLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgICAgIGZpeGVkRWxlbWVudHM6ICcjaGVhZGVyLCAuZm9vdGVyJyxcbiAgICAgICAgcmVzcG9uc2l2ZVdpZHRoOiAwLFxuICAgICAgICByZXNwb25zaXZlSGVpZ2h0OiAwLFxuICAgICAgICByZXNwb25zaXZlU2xpZGVzOiBmYWxzZSxcblxuICAgICAgICAvL0N1c3RvbSBzZWxlY3RvcnNcbiAgICAgICAgc2VjdGlvblNlbGVjdG9yOiAnLnNlY3Rpb24nLFxuICAgICAgICBzbGlkZVNlbGVjdG9yOiAnLnNsaWRlJyxcblxuICAgICAgICBsYXp5TG9hZGluZzogdHJ1ZSxcblxuICAgICAgICAvL2V2ZW50c1xuICAgICAgICBvbkxlYXZlOiBmdW5jdGlvbihpbmRleCwgbmV4dEluZGV4LCBkaXJlY3Rpb24pe30sXG4gICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24oYW5jaG9yTGluaywgaW5kZXgpe30sXG4gICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbigpe30sXG4gICAgICAgIGFmdGVyUmVzaXplOiBmdW5jdGlvbigpe30sXG4gICAgICAgIGFmdGVyUmVzcG9uc2l2ZTogZnVuY3Rpb24oaXNSZXNwb25zaXZlKXt9LFxuICAgICAgICBhZnRlclNsaWRlTG9hZDogZnVuY3Rpb24oYW5jaG9yTGluaywgaW5kZXgsIHNsaWRlQW5jaG9yLCBzbGlkZUluZGV4KXt9LFxuICAgICAgICBvblNsaWRlTGVhdmU6IGZ1bmN0aW9uKGFuY2hvckxpbmssIGluZGV4LCBzbGlkZUluZGV4LCBkaXJlY3Rpb24sIG5leHRTbGlkZUluZGV4KXt9XG4gICAgfSk7XG59KTsiXX0=