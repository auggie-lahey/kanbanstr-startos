import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'kanbanstr',
  title: 'kanbanstr',
  license: 'mit',
  wrapperRepo: 'https://github.com/auggie-lahey/kanbanstr-startos',
  upstreamRepo: 'https://github.com/vivganes/kanbanstr',
  supportSite: 'https://docs.start9.com/',
  marketingSite: 'https://start9.com/',
  donationUrl: 'https://donate.start9.com/',
  description: {
    short: 'kanbanstr',
    long: 'kanbanstr.',
  },
  assets: [],
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerBuild: {
          dockerfile: 'Dockerfile',
          workdir: '.',
        },
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
