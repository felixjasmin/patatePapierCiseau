class Game {

    constructor(){
        this.couleurMain = [
            ['✊','✋','✌️'],
            ['✊🏻','✋🏻','✌🏻'],
            ['✊🏽','✋🏽','✌🏽'],
            ['✊🏿','✋🏿','✌🏿'],
        ];
        this.afficherNomJoueur();
        this.emojiJoueur();
        this.emojiCpu();
        this.resultatMatch();
        

    }

    afficherNomJoueur(){
        const valeurNomJoueur = document.querySelector("#name");
        document.querySelector("#nom-joueur").innerHTML = valeurNomJoueur.value;
    }
    emojiJoueur(){
        //Couleur de peau
        const valeurCouleur = document.querySelector("[name = Peau]:checked").value;
        //Choix d'arme
        this.armeJoueur = document.querySelector("#arme").selectedIndex;
        //Choix emoji
        const collectionCouleur = this.couleurMain[valeurCouleur];
        const collectionArme = collectionCouleur[this.armeJoueur];
        //Affichage de l'emoji joueur
        document.querySelector(".emojiJoueur").innerHTML = collectionArme;    
    }
    emojiCpu(){
        //Couleur de peau
        const valeurCouleurCpu = Math.round( Math.random() * 3 );
        //Choix d'arme
        this.armeCpu = Math.round( Math.random() * 2 );
        //Choix emoji   
        const collectionCouleurCpu = this.couleurMain[valeurCouleurCpu];
        const collectionArmeCpu = collectionCouleurCpu[this.armeCpu];
        //Affichage de l'emoji cpu
        document.querySelector(".emojiCpu").innerHTML = collectionArmeCpu;
    }

    resultatMatch(){
        
        const fondJoueur = document.querySelector(".resultat-joueur");
        const fondCpu = document.querySelector(".resultat-cpu");
        const texteResultat = document.querySelector(".resultat-final");


        if ( this.armeCpu == this.armeJoueur){
            "egalite"
            fondJoueur.style.setProperty("--fondJoueur","#3F88C5");
            fondCpu.style.setProperty("--fondCpu","#3F88C5");
            texteResultat.innerHTML = "Égalité";
        }
        else if ( 
            this.armeJoueur == 0 && this.armeCpu == 1 ||
            this.armeJoueur == 1 && this.armeCpu == 2 ||
            this.armeJoueur == 2 && this.armeCpu == 0 )
            {         
            "defaite"
            fondJoueur.style.setProperty("--fondJoueur","#D16D82");
            fondCpu.style.setProperty("--fondCpu","#7FD8BE");
            texteResultat.innerHTML = "Défaite";
        }
        
        else {
            "victoire"
            fondJoueur.style.setProperty("--fondJoueur","#7FD8BE");
            fondCpu.style.setProperty("--fondCpu","#D16D82");
            texteResultat.innerHTML = "Victoire";
        }

        
    }

    

}
 const btnJouer = document.querySelector("#Jouer");
 const btnRejouer = document.querySelector("#btn-rejouer");

 
btnJouer.addEventListener("click",() =>
     { const game = new Game();

        const TL = gsap.timeline()
        .to(".boiteFormulaire", {duration: 1, ease: "back.in(1.2)", y: "100vh"})
        .to(".fond",{opacity: 0, onComplete: () => document.querySelector(".fond").classList.add("hideForm")
    })




        //document.querySelector(".fond").classList.add("hideForm");
       // document.querySelector(".boiteFormulaire").classList.add("hideForm");

    })

btnRejouer.addEventListener("click",() =>
    { 
        const TL = gsap.timeline()
        .to(".fond",{opacity: 1, onStart: () => document.querySelector(".fond").classList.remove("hideForm")})
        .to(".boiteFormulaire", {duration: 1, ease: "back.out(1.2)", y: "0"})



       //document.querySelector(".fond").classList.remove("hideForm");
       //document.querySelector(".boiteFormulaire").classList.remove("hideForm");

    })


