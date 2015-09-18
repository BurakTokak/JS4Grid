/*
.kirmizi {background:#E26464; } // 1
.mavi {background:#66ADE3; } // 2
.sari {background:#E2DE64; } // 3
.yesil {background:#86E264; } // 4
*/

var hucre = [];
var puan = 0;

function getRandomInt(min, max) {
/* Belirtilen sayılar arasında 
   Rastgele Int belirler      */
  return Math.floor(Math.random() * (max - min)) + min;
}


function renkKodu(renkID){
/* Renklerin hex kodlarını renk id'sine
   göre döner.*/
	if(renkID==1){ return "#E26464"; }else
	if(renkID==2){ return "#66ADE3"; }else
	if(renkID==3){ return "#E2DE64"; }else
	if(renkID==4){ return "#86E264"; }
}

function renkDegistir(hucreID, renk){
/* ID'si belirtilen hücrenin belirtilen renk 
   id'sine göre rengini değiştirir */
		hucre[hucreID] = renk;
	document.getElementById("hucre"+hucreID).style.background = renkKodu(renk);
}


function oyunGuncelle(){
/* Hücrelere Rastgele ve kurallara 
   uyacak şekilde renk atar ve puan 
   tabelasını günceller. */
   
document.getElementById("puan").innerHTML = puan + " Puan";

var random1 = getRandomInt(1,5);
var random2 = getRandomInt(1,5);

while(random1 == random2){
random2 = getRandomInt(1,5);
}

var i = 1;
while(i<=4){
 renkDegistir(i, random1);
 i++;
 }
 
var randomHucre = getRandomInt(1,5);
 
  renkDegistir(randomHucre, random2);
}

function tikKontrol(hucreID){
/* Tıklanan hücrenin doğruluğunu kontrol
   eder ve yanlış/doğru olma durumuna göre
   puanı değiştirirerek oyunGuncelle() 
   fonksiyonunu çağırır. */

var dogruHucre = 0;

	if(hucre[1] != hucre[2]){
		if(hucre[1] == hucre[3]){
		dogruHucre=2;
		}else{
		dogruHucre=1;
		}
	}else{
		if(hucre[1] == hucre[3]){
		dogruHucre=4;
		}else{
		dogruHucre=3;
		}
	}
	
	if(hucreID == dogruHucre){
		puan = puan + 10;
		oyunGuncelle();
	}else{
		if(puan>0){
			if(puan == 10) { puan = 0;}else{ puan = puan - 20;	}
		}
	oyunGuncelle();
	}

}
