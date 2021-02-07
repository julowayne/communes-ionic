<template>
<div v-if="$route.name === 'communes' && data.length > 0">
  <div v-if="data.length">
    <div>
      Nous avons trouvé {{ data.length > 1 ? data.length + " resultats." : data.length + " résultat."}}
    </div>
  </div>
  <ion-card v-for="card in data" :key="card">
    <ion-col>
      <ion-card-header>
        <ion-card-subtitle>Vous avez demandé</ion-card-subtitle>
        <ion-card-title>{{ card.nom }}, {{ card.codesPostaux[0] }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <div>
        Population: {{ card.population.toLocaleString() }}
        </div> 
        <div>
        Région: {{ card.region.nom }}
        </div> 
      </ion-card-content>
    </ion-col>
  </ion-card>
</div>
<!-- Juste un problème quand j'arrive dans le composant, l'API renvoie un status 200 avec un tableau vide
même quand on rentre un truc qui n'existe pas et j'ai pas trouvé comment le gérer a l'iinitialisation du composant quand on arrive dessus pour la première fois -->
<div v-if="data.length === 0 || data === null">
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        Pas de résultat pour votre recherche, verifiez que ce que vous cherchez existe !
      </ion-card-title>
    </ion-card-header> 
  </ion-card>
</div>

<div v-if="$route.name === 'departements'">
  <div v-if="departementData.length">Nous avons trouvé {{ departementData.length > 1 ? departementData.length + " resultats." : departementData.length + " résultat."}}</div>
  <ion-card v-for="card in departementData" :key="card">
    <ion-col>
    <ion-card-header>
      <ion-card-subtitle>Vous avez demandé</ion-card-subtitle>
      <ion-card-title>{{ card.nom }}, {{ card.code }}</ion-card-title>
    </ion-card-header>
    </ion-col>
  </ion-card>
</div>
<div v-if="$route.name === 'regions'">
  <div v-if="regionData.length">Nous avons trouvé {{ regionData.length > 1 ? regionData.length + " resultats." : regionData.length + " résultat."}}</div>
  <ion-card v-for="card in regionData" :key="card">
    <ion-col>
    <ion-card-header>
      <ion-card-subtitle>Vous avez demandé</ion-card-subtitle>
      <ion-card-title>{{ card.nom }}, {{ card.code }}</ion-card-title>
    </ion-card-header>
    </ion-col>
  </ion-card>
</div>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader , IonCardSubtitle, IonCardTitle, IonCol } from '@ionic/vue';

  export default {
    name: "Display",
    components: {
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonCol
    },
    props: {
      data: Array,
      regionData: Array,
      departementData: Array
    }
  }
</script>
