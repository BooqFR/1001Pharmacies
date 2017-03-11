/*Fonction de redimensionnement des colonnes portfolio*/

$( document ).ready(function() {
    var TailleImage = $('.img-responsive').height();
    var TailleDescription = $('.description').height();
    var TaillePortfolio = TailleImage + (TailleDescription - 150);
    $('.portfolio-item').height(TaillePortfolio);
});