<template>
  <div class="screen black" id="skillset">
      <div class="content">
        <div class="title-div">
          <h2>Skillset</h2>
        </div>
        <SkillSubSet
            v-for="skilltype in skillset"
            :key="skilltype.name"
            v-bind:name="skilltype.name"
            v-bind:skills="skilltype.skills"
          />
        </div>
  </div>
</template>

<script>
import { skillset } from '@/objects/'
import SkillSubSet from '@/components/SkillSubSet'

export default {
  name: 'Skillset',
  data () {
    return {
      name: 'Skillset',
      skillset: skillset
    }
  },
  components: {
    SkillSubSet
  }
}
</script>

<style scoped>
.content {
  margin-top: 64px;
  width: 100%;
  display: grid;
  grid-template-areas:
    "title title title title"
    "frontend frontend frontend frontend"
    "backend backend backend databases"
    "libraries libraries testing testing"
    "other other other other";
  grid-template-rows: 1fr 8fr 8fr 8fr 8fr;
  grid-template-columns: 1fr 1fr;
}

h2 {
  color: white;
  margin: 0;
  margin-top: 0.5em;
}

.title-div {
  grid-area: title;
}

p {
  color: white;
  font-family: 'Montserrat' sans-serif;
  font-weight: 700;
  font-size: 40px;
}
</style>
