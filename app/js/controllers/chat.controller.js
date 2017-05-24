function chatCtrl(ChatService, $firebaseAuth){
    
    var vm = this;
    var auth = $firebaseAuth();
    
    vm.prevMessages = ChatService.getMessages(); //to-do: after scrollup show previous 15 messages
    vm.lastMessages = ChatService.getLastMessages();
    
    vm.sendMessage = function(){
        if (vm.user != null) {
            var message = {
                text: vm.textMessage,
                authorName: vm.user.displayName,
                authorId: vm.user.uid,
                avatar: vm.user.photoURL,
                date: new Date().toLocaleString()
            }
        }

        if (vm.textMessage != '') {
            ChatService.sendMessage(message);
            vm.textMessage = '';
            
            var container = $('.panel-body'),
                scrollTo = $('li:last-child');

            container.animate({
                scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
            });
        }
    }

    vm.login = function () {
        auth.$signInWithPopup('google');
    }

    vm.logout = function () {
        auth.$signOut();
    }

    auth.$onAuthStateChanged(function (authData) {
        vm.user = authData;
    });
}

angular.module('cbsChat')
    .controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl])
