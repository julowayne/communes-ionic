<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Accueil" href="/tabs/accueil">
          <ion-icon :icon="homeOutline" />
          <ion-label>Accueil</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="Communes" href="/tabs/communes">
          <ion-icon :icon="businessOutline" />
          <ion-label>Communes</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="Département" href="/tabs/departements">
          <ion-icon :icon="mapOutline" />
          <ion-label>Département</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="Région" href="/tabs/regions">
          <ion-icon :icon="earthOutline" />
          <ion-label>Région</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { earthOutline, mapOutline, businessOutline, homeOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      earthOutline, 
      mapOutline, 
      businessOutline,
      homeOutline
    }
  }
}
</script>