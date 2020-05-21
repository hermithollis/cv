<template>
  <div class="skillset-container" :style="style">
    <h3>{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h3>
    <div class="skills-container">
      <SkillIcon v-for="skill in skills" :key="skill.text" v-bind:text="skill.text" v-bind:icon="skill.icon" />
    </div>
  </div>
</template>
<script>
import SkillIcon from '@/components/SkillIcon'
export default {
  name: 'SkillSubSet',
  props: ['name', 'skills'],
  components: {
    SkillIcon
  },
  computed: {
    style () {
      return {'grid-area': this.name}
    }
  }
}
</script>
<style scoped>
h3 {
  color: white;
  font-weight: 100;
  margin: 0;
  flex: 1;
}
.skills-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid white;
  padding-bottom: 0.5em;
}
.skillset-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 0.5em 1em;
  flex: 4;
}
</style>
