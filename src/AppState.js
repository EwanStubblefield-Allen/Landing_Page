import { reactive } from 'vue'
import dragon from './assets/img/Dragon.png'
import codeFitness from './assets/img/CodeFitness.png'
import keepr from './assets/img/Keepr.png'
import allSpice from './assets/img/AllSpice.png'
import tower from './assets/img/Tower.png'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  portfolio: [
    {
      name: 'Dragon Dungeons',
      description:
        'Dragon Dungeons is a DnD inspired application. It allow users to create campaigns and characters and manage them reactively. Dragon Dungeons integrates SignalR to allow users to join other campaigns and participate in battles and trading. Additionally, it uses openAi to generate character images. This application was deployed live using docker and an AWS EC2 instance.',
      img: dragon,
      url: 'https://dragons.ewanstubblefield-allen.dev/',
      git: 'Dragon_Dungeons',
      technologies: [
        ['html5', '-wordmark'],
        ['css3', '-wordmark'],
        ['javascript', ''],
        ['vuejs', '-wordmark'],
        ['csharp', ''],
        ['mysql', '-wordmark']
      ]
    },
    {
      name: 'CodeFitness',
      description: `CodeFitness is gamified fitness application that focuses on making working out enjoyable, especially for those who are inexperienced. Collaborated with <a href="https://www.linkedin.com/in/faith-morgan-94686b289" target="_blank">Faith Morgan</a>, <a href="https://linkedin.com/in/jasper-delight-a00771122" target="_blank">Jasper Delight</a>, <a href="https://www.linkedin.com/in/jwalk99star/" target="_blank">Joshua Walker</a>, and <a href="http://linkedin.com/in/kyle-peppersack-a39025285" target="_blank">Kyle Peppersack</a>. CodeFitness was deployed live using Render.`,
      img: codeFitness,
      url: 'https://codefitness-16iw.onrender.com/',
      git: 'CodeFitness',
      technologies: [
        ['html5', '-wordmark'],
        ['css3', '-wordmark'],
        ['javascript', ''],
        ['vuejs', '-wordmark'],
        ['nodejs', '-wordmark'],
        ['mongodb', '-wordmark']
      ]
    },
    {
      name: 'Keepr',
      description:
        'Keepr is a Pinterest clone that allows users to post images with descriptions known as keeps and allows them to save keeps in a collection called vaults. This application was deployed live using docker and an AWS EC2 instance.',
      img: keepr,
      url: 'https://keepr.ewanstubblefield-allen.dev/',
      git: 'FInal_Checkpoint',
      technologies: [
        ['html5', '-wordmark'],
        ['css3', '-wordmark'],
        ['javascript', ''],
        ['vuejs', '-wordmark'],
        ['csharp', ''],
        ['mysql', '-wordmark']
      ]
    },
    {
      name: 'All-Spice',
      description:
        'All-Spice is recipe sharing application where users can post and favorite recipes. All-Spice was deployed live using AWS EC2 instance and docker.',
      img: allSpice,
      url: 'https://all-spice.ewanstubblefield-allen.dev/',
      git: 'All_Spice',
      technologies: [
        ['html5', '-wordmark'],
        ['css3', '-wordmark'],
        ['javascript', ''],
        ['vuejs', '-wordmark'],
        ['csharp', ''],
        ['mysql', '-wordmark']
      ]
    },
    {
      name: 'Tower',
      description:
        'Tower is and application where users can post upcoming events that allow them to attend events and comment. This was deployed live using AWS EC2 instance.',
      img: tower,
      url: 'https://tower.ewanstubblefield-allen.dev/',
      git: 'Checkpoint6',
      technologies: [
        ['html5', '-wordmark'],
        ['css3', '-wordmark'],
        ['javascript', ''],
        ['vuejs', '-wordmark'],
        ['nodejs', '-wordmark'],
        ['mongodb', '-wordmark']
      ]
    }
  ],
  application: null
})
