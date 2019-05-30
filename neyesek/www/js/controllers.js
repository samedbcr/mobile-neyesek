angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$stateParams) {
  $scope.yemekler = [
  { adi: 'Patates',kategori:
  [
  {kategoriAdi:'Fırında Patates'},
  {kategoriAdi:'Etli'}
  ], malzemeler:
  [
  {malzeme:'1 kg patates'},
  {malzeme:'4 adet biber'},
  {malzeme:'1 yemek kaşığı salça'},
  {malzeme:'1 adet soğan'}
  ],
  resim: 'https://lezzet.blob.core.windows.net/images-xxlarge-recipe/firinda_baharatli_patates-ce1bc644-94f0-4d75-9877-91edb82ed9ee.jpg' ,id: 0 },
  
  { adi: 'Pilav',kategori:[
  {kategoriAdi:'Pirinç'},
  {kategoriAdi:'Nohut'},
   {kategoriAdi:'Nohut'},
    {kategoriAdi:'Nohut'},
     {kategoriAdi:'Nohut'}
  ], malzemeler:
  [
  {malzeme:'1 kg pirinç'},
  {malzeme:'Sıvı yağ'},
  {malzeme:'400 gr nohut'}
  ],
  resim: 'http://resim.nepisirsem.com/crop/w640-h640-c4x3//resimliyemek/nohutlu_pilav.jpg' ,id: 1 },
  
  { adi: 'Etli Yemek',kategori:[
  {kategoriAdi:'Fırında Patates'},
  {kategoriAdi:'Etli'},
  {kategoriAdi: 'Sebzeli'}
  ], malzemeler:
  [
  {malzeme:'1 kg kuşbaşı'},
  {malzeme:'4 adet biber'},
  {malzeme:'1 yemek kaşığı salça'},
  {malzeme:'1 adet soğan'},
  {malzeme:'3 adet domates'}
  ],
  resim: 'https://cdn.yemek.com/mncrop/313/280/uploads/2016/04/etli-patates-yemegi.jpg' ,id: 2 },
  
  { adi: 'Makarna',kategori:[
  {kategoriAdi:'Makarna'}
  ], malzemeler:
  [
  {malzeme:'1 paket makarna'},
  {malzeme:'Salça'}
  ],
  resim: 'http://i.hurimg.com/i/hurriyet/75/1500x844/5ad09955c03c0e1110f78bbd.jpg' ,id: 3 },
  
  { adi: 'Balık',kategori:[
  {kategoriAdi:'Fırında Balık'},
  {kategoriAdi:'Sebzeli'}
  ], malzemeler:
  [
  {malzeme:'1 kg balık'},
  {malzeme:'4 adet biber'},
  {malzeme:'Salça'},
  {malzeme:'Soğan'}
  ],
  resim: 'http://yelda.remgo.com/wp-content/uploads/2008/08/Firinda_Balik.jpeg' ,id: 4 },
  ];

  if($stateParams.yemekId >= 0){
    $scope.bilgi = $scope.yemekler[$stateParams.yemekId];
  }
  
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
