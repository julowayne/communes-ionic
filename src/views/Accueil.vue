<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title class="ion-text-center" size="large">Communes</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-col>
        <ion-card-header>
          <ion-card-title class="ion-text-center">Bienvenue sur Communes</ion-card-title>
        </ion-card-header>
        <ion-list>
        <ion-list-header>
          Vous trouverez ici 3 onglets de recherche :
        </ion-list-header>
        <ion-item>
          <ion-icon slot="start" :icon="businessOutline" /> 
          <p>Recherche de communes via code postal ou nom</p>
        </ion-item>

        <ion-item>
          <ion-icon slot="start" :icon="mapOutline" />
          <p>Recherche de communes via le département choisi</p>
        </ion-item>

        <ion-item>
          <ion-icon slot="start" :icon="earthOutline" />
          <p>Recherche de région via le nom demandé</p>
        </ion-item>
      </ion-list>
      </ion-col>
  </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardHeader, IonItem, IonList, IonListHeader, IonCol, IonIcon } from '@ionic/vue';
import { businessOutline, earthOutline, mapOutline } from 'ionicons/icons';


export default  {
  name: 'Régions',
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage,
    IonCard,
    IonItem,
    IonList,
    IonCardTitle, 
    IonCardHeader,
    IonListHeader,
    IonCol,
    IonIcon
  },
  setup() {
    return {
      businessOutline, 
      earthOutline, 
      mapOutline,
    }
  }
}
</script>
<style scoped>
#content {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
}
ion-card {
  background-color: black;

}
</style>