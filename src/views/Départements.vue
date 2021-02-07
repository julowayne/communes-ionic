<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title class="ion-text-center" size="medium">Communes ionic</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="content">
        <Search @departementData="getDepartementInformations"/>
        <Display :departementData="departementContent" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import Display from '@/components/Display.vue';
import Search from '@/components/Search.vue';


export default  {
  name: 'Départements',
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage, 
    Display, 
    Search 
  },
  data(){
    return {
      departementContent: ""
    }
  },
  methods: {  
    getDepartementInformations(departementData){
      this.departementContent = departementData
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
</style>