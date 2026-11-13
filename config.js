const CONFIG = {
  name: "KaiTouu",
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdIPMRSMCZegy_um0-5axJz3MXQqY6MCBtO4SnH7oFXZpJF9hXkk2Hb5t&s=10",
  globalBg: "https://server.wallpaperalchemy.com/storage/wallpapers/259/minecraft-4k-wallpaper-sunlit-forest-canopy.jpg",
  ui: {
    primaryColor: "#c4b5fd",
    titleGrad1: "#ff0000",
    titleGrad2: "#ffff00",
    borderRadius: 24,
    glassBlur: 20,
    dockWidth: 290,
    dockPadding: 2,
    fontFamily: "Lexend"
  },
  tabs: {
    java: {
      label: "Java",
      title: "MC Java",
      sub: "Launcher, plugin, config, map, model (chỉ dành cho server)",
      grad: [
        "#7c5cff",
        "#1b1050"
      ],
      bannerImg: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Minecraft%20_Holiday_Game_Drop_2025_OV-PMP_1280x720.jpg",
      iconImg: "",
      folders: [
        {
          id: "launcher",
          name: "Launcher java",
          items: [
            {
              title: "ZalithLauncher2",
              subtitle: "by ZalithLauncher",
              description: "A Minecraft: Java Edition Launcher for Android",
              image: "https://avatars.githubusercontent.com/u/190403391?v=4",
              source: "https://github.com/ZalithLauncher/ZalithLauncher2",
              actions: [
                {
                  label: "Tải xuống (2.8.2)",
                  url: "https://github.com/ZalithLauncher/ZalithLauncher2/releases/download/2.8.2/ZalithLauncher-2.8.2-arm64-v8a.apk",
                  primary: true
                }
              ],
              banner: "https://opengraph.githubassets.com/1/ZalithLauncher/ZalithLauncher2",
              previewImages: [
                "https://opengraph.githubassets.com/1/ZalithLauncher/ZalithLauncher2"
              ],
              metaExtra: "ZalithLauncher · ⭐ 2.189 · 2.8.2 · Kotlin",
              marketplaceUrl: "https://github.com/ZalithLauncher/ZalithLauncher2",
              github: "https://github.com/ZalithLauncher/ZalithLauncher2"
            },
            {
              title: "Cryogenic-Launcher",
              subtitle: "by RussoViller",
              description: "A new Minecraft Launcher, based on Zalith Launcher 2, but with a more modern interface and more features.",
              image: "https://raw.githubusercontent.com/vgtuananh0055-spec/KaiLauncher/refs/heads/main/1793723519090.png",
              source: "https://github.com/RussoViller/Cryogenic-Launcher",
              actions: [
                {
                  label: "Tải xuống (CryogenicLauncher1.5.3)",
                  url: "https://github.com/RussoViller/Cryogenic-Launcher/releases/download/CryogenicLauncher1.5.3/CryogenicLauncher-r1.5.3-arm64-v8a.apk",
                  primary: true
                }
              ],
              banner: "https://opengraph.githubassets.com/1/RussoViller/Cryogenic-Launcher",
              previewImages: [
                "https://opengraph.githubassets.com/1/RussoViller/Cryogenic-Launcher",
                "https://raw.githubusercontent.com/vgtuananh0055-spec/KaiLauncher/refs/heads/main/1793723519090.png"
              ],
              metaExtra: "RussoViller · ⭐ 4 · CryogenicLauncher1.5.3",
              marketplaceUrl: "https://github.com/RussoViller/Cryogenic-Launcher/tree/main",
              github: "https://github.com/RussoViller/Cryogenic-Launcher"
            },
            {
              title: "RayLauncher",
              subtitle: "by KedaMC",
              description: "A Minecraft: Java Edition Launcher for Android",
              image: "https://avatars.githubusercontent.com/u/201689396?v=4",
              source: "https://github.com/KedaMC/RayLauncher",
              actions: [
                {
                  label: "Tải xuống (v1.0-alpha6)",
                  url: "https://github.com/KedaMC/RayLauncher/releases/download/v1.0-alpha6/RayLauncher-2.8.1-Alpha6-arm64-v8a.apk",
                  primary: true
                }
              ],
              banner: "https://opengraph.githubassets.com/1/KedaMC/RayLauncher",
              previewImages: [
                "https://opengraph.githubassets.com/1/KedaMC/RayLauncher"
              ],
              metaExtra: "KedaMC · ⭐ 3 · v1.0-alpha6 · Kotlin",
              marketplaceUrl: "https://github.com/KedaMC/RayLauncher",
              github: "https://github.com/KedaMC/RayLauncher"
            },
            {
              title: "AmberLauncher",
              subtitle: "by ItsVynzzzz",
              description: "Launcher minecraft java untuk android dengan fitur yang lebih sedikit",
              image: "https://raw.githubusercontent.com/ItsVynzzzz/AmberLauncher/refs/heads/main/app/src/main/res/drawable/nux_icon.png",
              source: "https://github.com/ItsVynzzzz/AmberLauncher",
              actions: [
                {
                  label: "Tải xuống (v0.1.0-beta.71)",
                  url: "https://github.com/ItsVynzzzz/AmberLauncher/releases/download/uji/AmberLauncher-0.1.0-beta.70.uji.162-64bit-arm64-v8a.apk",
                  primary: true
                }
              ],
              banner: "https://opengraph.githubassets.com/1/ItsVynzzzz/AmberLauncher",
              previewImages: [
                "https://opengraph.githubassets.com/1/ItsVynzzzz/AmberLauncher"
              ],
              metaExtra: "ItsVynzzzz · ⭐ 3 · v0.1.0-beta.62 · Kotlin",
              marketplaceUrl: "https://github.com/ItsVynzzzz/AmberLauncher",
              github: "https://github.com/ItsVynzzzz/AmberLauncher"
            },
            {
              title: "Horizon launcher",
              subtitle: "by starling-client",
              description: "Starling, formerly Horizon Android: Android port of Horizon (Rust Minecraft 26.3) with Vulkan, editable touch controls and native .hmod mods.",
              image: "https://avatars.githubusercontent.com/u/352657321?v=4",
              source: "https://github.com/starling-client/starling",
              actions: [
                {
                  label: "Tải xuống (v0.7.8)",
                  url: "https://github.com/starling-client/starling/releases/download/v0.7.8/Horizon-Android-0.7.8-arm64-v8a.apk",
                  primary: true
                }
              ],
              banner: "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/android/joystick-fox.png",
              previewImages: [
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/android/joystick-fox.png",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/android/dpad-river.png",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/android/snow-landscape.png",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/android/third-person-desert.png",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/android/desert-panorama.png",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/android/fujitsu-f03l-menu.png",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/android/fujitsu-f03l-gameplay.png",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/banner.webp",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/launcher-play.webp",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/launcher-settings.webp",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/sunset.webp",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/survival.webp",
                "https://raw.githubusercontent.com/starling-client/starling/android/docs/media/settings.webp"
              ],
              metaExtra: "starling-client · ⭐ 730 · v0.7.8 · Rust",
              marketplaceUrl: "https://github.com/starling-client/starling",
              github: "https://github.com/starling-client/starling"
            },
            {
              title: "nuxlabs",
              subtitle: "by IsraaDeveloper",
              description: "Launcher minecraft java untuk android dengan fitur yang lengkap",
              image: "https://raw.githubusercontent.com/IsraaDeveloper/nuxlabs/refs/heads/main/app/src/main/res/drawable/nux_icon.png",
              source: "https://github.com/IsraaDeveloper/nuxlabs",
              actions: [
                {
                  label: "Tải xuống (v1.1.6)",
                  url: "https://github.com/IsraaDeveloper/nuxlabs/releases/download/v1.1.6/nuxlauncher-v1.1.6.apk",
                  primary: true
                }
              ],
              banner: "https://raw.githubusercontent.com/IsraaDeveloper/nuxlabs/refs/heads/main/app/src/main/res/drawable/nux_icon.png",
              previewImages: [
                "https://opengraph.githubassets.com/1/IsraaDeveloper/nuxlabs"
              ],
              metaExtra: "IsraaDeveloper · ⭐ 6 · v1.1.6 · Kotlin",
              marketplaceUrl: "https://github.com/IsraaDeveloper/nuxlabs",
              github: "https://github.com/IsraaDeveloper/nuxlabs"
            },
            {
              title: "PojavLauncher",
              subtitle: "by pojavlauncherteam",
              description: "A Minecraft: Java Edition Launcher for Android and iOS based on Boardwalk. Succeeded by https://github.com/AngelAuraMC/Amethyst-Android",
              image: "https://avatars.githubusercontent.com/u/69146964?v=4",
              source: "https://github.com/PojavLauncherTeam/PojavLauncher",
              actions: [
                {
                  label: "Tải xuống (gladiolus)",
                  url: "https://github.com/PojavLauncherTeam/PojavLauncher/releases/download/gladiolus/PojavLauncher.apk",
                  primary: true
                }
              ],
              banner: "https://raw.githubusercontent.com/PojavLauncherTeam/PojavLauncher/v3_openjdk/app_pojavlauncher/src/main/assets/pojavlauncher.png",
              previewImages: [
                "https://raw.githubusercontent.com/PojavLauncherTeam/PojavLauncher/v3_openjdk/app_pojavlauncher/src/main/assets/pojavlauncher.png",
                "https://opengraph.githubassets.com/1/pojavlauncherteam/pojavlauncher"
              ],
              metaExtra: "pojavlauncherteam · ⭐ 9.506 · gladiolus · Java",
              marketplaceUrl: "https://github.com/pojavlauncherteam/pojavlauncher",
              github: "https://github.com/PojavLauncherTeam/PojavLauncher"
            },
            {
              title: "FoldCraftLauncher",
              subtitle: "by FCL-Team",
              description: "Fold Craft Launcher, an Android Minecraft : Java Edition launcher.",
              image: "https://avatars.githubusercontent.com/u/114871581?v=4",
              source: "https://github.com/FCL-Team/FoldCraftLauncher",
              actions: [
                {
                  label: "Tải xuống (1.3.4.5)",
                  url: "https://github.com/FCL-Team/FoldCraftLauncher/releases/download/1.3.4.5/FCL-release-1.3.4.5-all.apk",
                  primary: true
                }
              ],
              banner: "https://raw.githubusercontent.com/FCL-Team/FoldCraftLauncher/main/FCL/src/main/res/drawable/img_app.png",
              previewImages: [
                "https://raw.githubusercontent.com/FCL-Team/FoldCraftLauncher/main/FCL/src/main/res/drawable/img_app.png",
                "https://raw.githubusercontent.com/FCL-Team/FoldCraftLauncher/main/.github/images/ui_main_light.jpg",
                "https://raw.githubusercontent.com/FCL-Team/FoldCraftLauncher/main/.github/images/ui_main_dark.jpg",
                "https://raw.githubusercontent.com/FCL-Team/FoldCraftLauncher/main/.github/images/game.jpg",
                "https://opengraph.githubassets.com/1/FCL-Team/FoldCraftLauncher"
              ],
              metaExtra: "FCL-Team · ⭐ 5.163 · 1.3.4.5 · Java",
              marketplaceUrl: "https://github.com/FCL-Team/FoldCraftLauncher",
              github: "https://github.com/FCL-Team/FoldCraftLauncher"
            }
          ]
        },
        {
          id: "plugin",
          name: "Plugin",
          items: [
            {
              title: "EcoPets",
              subtitle: "Nguồn MCModels",
              description: "Cung cấp cho người chơi những người bạn đồng hành có thể lên cấp khi họ chơi, với những đặc quyền ngày càng mạnh mẽ hơn ở mỗi cấp, các mô hình và hoạt ảnh tùy chỉnh, và trứng thú cưng có thể giao dịch, tất cả được cấu hình mà không cần kiến thức lập trình.",
              image: "https://api.mcmodels.net/storage/NOp1LCxHyn6t3pXp0vAqCQXOHnCQGkK9SWuWh6sD.webp",
              source: "https://mcmodels.net/vi/products/18027/ecopets?srsltid=AYCX9vKj-uZo6nbDVTgk_LvJqiCiQ_oqT-MjpQemNFjPPSrHu3Mw74uY",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1oPThhKMYQjEG94LGE8fj112gh3fHUj4i",
                  primary: true
                }
              ],
              banner: "https://api.mcmodels.net/storage/DSNVw3UbOT0e0vXSANthvPz3kWib81g46LPorXN1.webp",
              previewImages: [
                "https://api.mcmodels.net/storage/DSNVw3UbOT0e0vXSANthvPz3kWib81g46LPorXN1.webp",
                "https://api.mcmodels.net/storage/lTlgpvH93tcHY78iRljzpSy4v4Z2cftfxr6QAd0P.webp",
                "https://api.mcmodels.net/storage/GdTjIU8YmSrrgjW7MbLyijnL04lHgWTI4TDmhtzU.webp",
                "https://api.mcmodels.net/storage/ej2VUdpLjohlaL6jibOOOPmAnbDkJaDYTNPb9mEX.webp",
                "https://api.mcmodels.net/storage/fXh3kaZZoEIssjly5z4A4fHRHsZliqh8Rc4MAmuV.webp",
                "https://api.mcmodels.net/storage/yj5FiXgRGHbjqIOvVTNeES2JrvIgSwPkIxLYKC0h.webp",
                "https://api.mcmodels.net/storage/KDh4yvsDDrXvMR2Wumgw4JT7Uwpfo7U2bpHpGpnU.webp",
                "https://api.mcmodels.net/storage/X1xRdUtxVlkxx7k0ufWcrxO9Ml4IP02w1Lg9Tvgb.webp",
                "https://api.mcmodels.net/storage/k2ZkOB0nU42HpgYpP52o7Ut23QE3HxT54dCYAn6V.png",
                "https://api.mcmodels.net/storage/E0ISNzZurIcKVmRwZNmupKyitpR0MBL19Wkm59D6.png",
                "https://api.mcmodels.net/storage/WA2PzEqVrrptDZDXdXa0AAEO3C9JKtd5PaUd2UHN.png",
                "https://i.postimg.cc/h4CxPzHR/header.gif",
                "https://i.postimg.cc/ZYf3KBX2/most_effects.gif"
              ],
              metaExtra: "Nguồn MCModels",
              marketplaceUrl: "https://mcmodels.net/vi/products/18027/ecopets?srsltid=AYCX9vKj-uZo6nbDVTgk_LvJqiCiQ_oqT-MjpQemNFjPPSrHu3Mw74uY"
            },
            {
              title: "Ecoenchants",
              subtitle: "by BuiltByBit",
              description: "EcoEnchants is the #1 most powerful custom enchant plugin ever made",
              image: "https://img.builtbybit.com/4HOl_OTLckJ9KJGqNu5N_myKtDp6iz9zbvWsP8r9uy8/resize:fill:2000/format:webp/aHR0cHM6Ly9odWIuYXV4aWxvci5pby9hcGkvcHVibGljL21lZGlhL2VuY2hhbnRzLWhlYWRlcg",
              source: "https://builtbybit.com/resources/ecoenchants.23935/?ref=370673",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1bbPcK6JQLDznJ2GCUIv13kGfoXSCLZmt",
                  primary: true
                }
              ],
              banner: "https://img.builtbybit.com/4HOl_OTLckJ9KJGqNu5N_myKtDp6iz9zbvWsP8r9uy8/resize:fill:2000/format:webp/aHR0cHM6Ly9odWIuYXV4aWxvci5pby9hcGkvcHVibGljL21lZGlhL2VuY2hhbnRzLWhlYWRlcg",
              previewImages: [
                "https://img.builtbybit.com/GQY07v3_f-dqbhDowSukpsYD91NufSfWTYYpjLFcN4E/resize:fill:2000/format:webp/aHR0cHM6Ly9odWIuYXV4aWxvci5pby9hcGkvcHVibGljL21lZGlhL2VuY2hhbnRzLWFudmlsLXN1cHBvcnQ",
                "https://img.builtbybit.com/wGjy2zlUHeWNE3hekkjyGCCwJDKuOkT3DNVCm64cYwg/resize:fill:2000/format:webp/aHR0cHM6Ly9odWIuYXV4aWxvci5pby9hcGkvcHVibGljL21lZGlhL2VuY2hhbnRzLWVuY2hhbnQtZGVzY3JpcHRpb25z",
                "https://img.builtbybit.com/hqiEZGXQa1irkI5PPSbGt5rdrGsrSKwLcIUSv9MScRs/resize:fill:2000/format:webp/aHR0cHM6Ly9odWIuYXV4aWxvci5pby9hcGkvcHVibGljL21lZGlhL2VuY2hhbnRzLWVuY2hhbnRpbmctdGFibGU",
                "https://img.builtbybit.com/JyMelYyanXBwNhvKcskPTlKr-SSscZC-xMxQL1XleMM/resize:fill:2000/format:webp/aHR0cHM6Ly9odWIuYXV4aWxvci5pby9hcGkvcHVibGljL21lZGlhL2VuY2hhbnRzLWh1bmRyZWRzLW9mLWVuY2hhbnRz",
                "https://img.builtbybit.com/b_n3bkDDfTt1W9sXlkdqnUThIVVXjMbeC379JT91yuc/resize:fill:2000/format:webp/aHR0cHM6Ly9odWIuYXV4aWxvci5pby9hcGkvcHVibGljL21lZGlhL2VuY2hhbnRzLW1vZGVybi1lZmZlY3Rz",
                "https://img.builtbybit.com/OM7xW-4leC6QOBmU6dtz2XxwpVVpHEqcleLZXI6pgOE/resize:fill:2000/format:webp/aHR0cHM6Ly9odWIuYXV4aWxvci5pby9hcGkvcHVibGljL21lZGlhL2VuY2hhbnRzLXZpbGxhZ2VyLXRyYWRlcw"
              ],
              metaExtra: "BuiltByBit",
              marketplaceUrl: "https://builtbybit.com/resources/ecoenchants.23935/?ref=370673"
            },
            {
              title: "EcoSkills",
              subtitle: "Nguồn Eco",
              description: "Thêm một hệ thống RPG hoàn chỉnh vào máy chủ của bạn mà bạn có thể tùy chỉnh theo bất kỳ cách nào bạn muốn.",
              image: "https://i.postimg.cc/fTMsRpfs/Header.gif",
              source: "https://mcmodels.net/vi/products/16911/ecoskills?srsltid=AYCX9vLjVa9BDzaJuWP75LrrMLQpJdtpJ10BkwuKnmet65PJ2WcFn8AN",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1bey4ED9ci8R-fWdOacRTPfbmMbXP6TjF",
                  primary: true
                }
              ],
              banner: "https://i.postimg.cc/pL6MkTN0/GUI-Progression.gif",
              previewImages: [
                "https://i.postimg.cc/pL6MkTN0/GUI-Progression.gif",
                "https://i.postimg.cc/FHRQjS6M/Make-Skills.gif",
                "https://i.postimg.cc/YCsB89cJ/Premade-Setup.gif",
                "https://i.postimg.cc/FHBXGRtq/Stats-and-Effects.gif",
                "https://i.postimg.cc/jSFYv5Vp/Mana.gif",
                "https://i.postimg.cc/SxvbVs0T/Damage-Indicators.gif",
                "https://i.postimg.cc/9QMjG9SH/Custom-Items.gif",
                "https://i.postimg.cc/W1HcS3LV/Sync.gif",
                "https://i.postimg.cc/h4CxPzHR/header.gif",
                "https://i.postimg.cc/ZYf3KBX2/most_effects.gif",
                "https://i.postimg.cc/MHrjsNyb/endless_conditions.gif"
              ],
              metaExtra: "Nguồn MCModels",
              marketplaceUrl: "https://mcmodels.net/vi/products/16911/ecoskills?srsltid=AYCX9vLjVa9BDzaJuWP75LrrMLQpJdtpJ10BkwuKnmet65PJ2WcFn8AN"
            },
            {
              title: "AdvancedEnchantments",
              subtitle: "by BuiltByBit",
              description: "Plugin enchant.\n\nHơn 400 Phù phép Tùy chỉnh - Hỗ trợ Bàn phù phép & Đe - Hơn 20 Vật phẩm, hỗ trợ tùy chỉnh thông số và kỹ năng qua YAML file.",
              image: "https://img.builtbybit.com/rN8kntKxWQ3BXSTbvovyaw5idZ6GvAjRGTqpGuGddyA/resize:fill:2000/format:webp/aHR0cHM6Ly9hZHZhbmNlZHBsdWdpbnMubmV0L2ltZy9lemdpZi0zLTcwNTlmMzQyOGYuZ2lm",
              source: "https://builtbybit.com/resources/advancedenchantments-450-enchantments.29443/",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1XuN5rai5rG17FWMyjIbSN0DW44Jy-YTJ",
                  primary: true
                }
              ],
              banner: "https://img.builtbybit.com/rN8kntKxWQ3BXSTbvovyaw5idZ6GvAjRGTqpGuGddyA/resize:fill:2000/format:webp/aHR0cHM6Ly9hZHZhbmNlZHBsdWdpbnMubmV0L2ltZy9lemdpZi0zLTcwNTlmMzQyOGYuZ2lm",
              previewImages: [
                "https://img.builtbybit.com/rN8kntKxWQ3BXSTbvovyaw5idZ6GvAjRGTqpGuGddyA/resize:fill:2000/format:webp/aHR0cHM6Ly9hZHZhbmNlZHBsdWdpbnMubmV0L2ltZy9lemdpZi0zLTcwNTlmMzQyOGYuZ2lm",
                "https://img.builtbybit.com/WQokRwKSFj0oqeHx7u4cMjM6mfUlEOEdB-11lxpJ7E4/resize:fill:2000/format:webp/aHR0cHM6Ly9hZHZhbmNlZHBsdWdpbnMubmV0L2ltZy9hZS9KSjlvdHgzLmdpZg",
                "https://img.builtbybit.com/qzp8yzO6gg9kkmeZHFQXM_d5SLyUCeTMEtwH5z1aSrw/resize:fill:2000/format:webp/aHR0cHM6Ly9hZHZhbmNlZHBsdWdpbnMubmV0L2ltZy9hZS9KeTNIRG40LmdpZg",
                "https://img.builtbybit.com/FNvPR7XXVlPeqXjeb150McNn2FMyJtYXKdTSloC5kog/resize:fill:2000/format:webp/aHR0cHM6Ly9hZHZhbmNlZHBsdWdpbnMubmV0L2ltZy9hZS9hQWs3SFBNLnBuZw",
                "https://img.builtbybit.com/0Mnd5WqW0kOu8J6ikG8UBBIUfJgPidi-c3A9TcGDhw0/resize:fill:2000/format:webp/aHR0cHM6Ly9hZHZhbmNlZHBsdWdpbnMubmV0L2ltZy9hZS9ibEdiT2tMLnBuZw",
                "https://img.builtbybit.com/_CLgVi40arMw4WgKKhPfCv4ZIktGGWLOzv7iWDKtmBs/resize:fill:2000/format:webp/aHR0cHM6Ly9hZHZhbmNlZHBsdWdpbnMubmV0L2ltZy9hZS9ZSmczRkVxLmdpZg",
                "https://img.builtbybit.com/cb7_afvlbeRsUAtCPZdXZMVOUpPi9HFO4kfxSDknIqg/resize:fill:2000/format:webp/aHR0cHM6Ly9hZHZhbmNlZHBsdWdpbnMubmV0L2ltZy9hZS9maTAzdkZjLmdpZg",
                "https://img.builtbybit.com/cNKHf45OqDg7OMAQkXOoffC_miJzxXuJp0zozrWrXFg/resize:fill:2000/format:webp/aHR0cHM6Ly9hZHZhbmNlZHBsdWdpbnMubmV0L2ltZy9hZS9OUFV4WTdkLmdpZg"
              ],
              metaExtra: "Advanced enchantment",
              marketplaceUrl: "https://builtbybit.com/resources/advancedenchantments-450-enchantments.29443/"
            },
            {
              title: "Itemsadder",
              subtitle: "by Itemadder",
              description: "thêm các item tùy chỉnh",
              image: "https://raw.githubusercontent.com/vgtuananh0055-spec/My-web/main/Icon%2Bvideo%2Bgif/gemini_generated_video_89c625b4.gif",
              source: "https://builtbybit.com/resources/itemsadder.10839/",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1L3PQjSv5wZD1W5beimccRKa3JxwTnyGa",
                  primary: true
                }
              ],
              banner: "https://raw.githubusercontent.com/vgtuananh0055-spec/My-web/main/Icon%2Bvideo%2Bgif/gemini_generated_video_89c625b4.gif",
              previewImages: [
                "https://builtbybit.com/attachments/yom3jxw-png.955797/?preset=fullr2"
              ],
              metaExtra: "BuiltByBit",
              marketplaceUrl: "https://builtbybit.com/resources/itemsadder.10839/"
            },
            {
              title: "Nexo",
              subtitle: "",
              description: "Minecraft plugins for custom content-creation",
              image: "https://i.postimg.cc/5NbFk1fm/Du-an-moi-29-06C224C.gif",
              source: "https://nexomc.com/",
              actions: [
                {
                  label: "Soon",
                  url: "https://drive.google.com/uc?export=download&id=1HhWd2TZ_ST_uD-1YZdLLSoqiGDQpY4Ao",
                  primary: true
                }
              ],
              previewImages: [
                "https://i.imgur.com/Vujpgud.png",
                "https://i.imgur.com/285GYxI.png"
              ],
              metaExtra: "By | six",
              marketplaceUrl: "https://nexomc.com/"
            },
            {
              title: "oraxen",
              subtitle: "by oraxen",
              description: "Oraxen is a minecraft plugin that allows to easily use Minecraft 1.14 features in order to create new items with custom textures. It handles the resourcepack generation, upload (using Polymath) and has an extensible API.",
              image: "https://i.postimg.cc/CLbwZ04z/Du-an-moi-29-52FDDAA.gif",
              source: "https://github.com/oraxen/oraxen",
              actions: [
                {
                  label: "Tải bản mới nhất",
                  url: "https://drive.google.com/uc?export=download&id=1JiDSJMXXOpQyKt9VVKLsKd0_iudUNt_q",
                  primary: true
                }
              ],
              banner: "https://raw.githubusercontent.com/oraxen/oraxen/master/assets/blocks.png",
              previewImages: [
                "https://raw.githubusercontent.com/oraxen/oraxen/master/assets/blocks.png",
                "https://raw.githubusercontent.com/oraxen/oraxen/master/assets/paintings.png",
                "https://raw.githubusercontent.com/oraxen/oraxen/master/assets/discs.png",
                "https://raw.githubusercontent.com/oraxen/oraxen/master/assets/glyphs.png",
                "https://raw.githubusercontent.com/oraxen/oraxen/master/assets/guis.png",
                "https://raw.githubusercontent.com/oraxen/oraxen/master/assets/esc.png",
                "https://raw.githubusercontent.com/oraxen/oraxen/master/assets/armors.png",
                "https://opengraph.githubassets.com/1/oraxen/oraxen"
              ],
              metaExtra: "oraxen · ⭐ 753 · v1.220.1 · Java",
              marketplaceUrl: "https://github.com/oraxen/oraxen",
              github: "https://github.com/oraxen/oraxen"
            },
            {
              title: "AdvancedCrates | AdvancedPlugins",
              subtitle: "Nguồn advancedplugins.net",
              description: "ItemsAdder, MMOItems, Oraxen Supported | Edit Everything InGame | Animation Visibility Based On Distance",
              image: "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/Jfw1hUU.png",
              source: "https://advancedplugins.net/item/AdvancedCrates.9",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://builtbybit.com/resources/advancedcrates-premium-animations.12195/",
                  primary: true
                }
              ],
              banner: "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/cQerUdC.png",
              previewImages: [
                "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/6C7Ba3m.png",
                "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/I5KEqjD.png",
                "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/boQgjwP.gif",
                "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/na7Lmbh.gif",
                "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/Lzq6yAj.png",
                "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/uYlE3mX.gif",
                "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/wJW8MVY.gif",
                "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/Jfw1hUU.png"
              ],
              metaExtra: "Nguồn advancedplugins.net",
              marketplaceUrl: "https://advancedplugins.net/item/AdvancedCrates.9"
            },
            {
              title: "Quests Plugin - BattlePass | AdvancedPlugins",
              subtitle: "Nguồn advancedplugins.net",
              description: "Plugin nhiệm vụ tiên tiến nhất, với hơn 50 nhiệm vụ - Tự tạo nhiệm vụ - Trình chỉnh sửa giao diện người dùng - Giữ chân người chơi - Nhiệm vụ hàng ngày và hàng tuần",
              image: "https://advancedplugins.net/img/bp/logo-min.png",
              source: "https://advancedplugins.net/item/BattlePass.11",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1QJl-Gl7X5riXvs5Jg_SrjeUy8FoOIVIU",
                  primary: true
                }
              ],
              banner: "https://advancedplugins.net/img/bp/top-used-min.png",
              previewImages: [
                "https://advancedplugins.net/img/bp/daily-weekly-quests.gif",
                "https://advancedplugins.net/img/bp/rewards.gif",
                "https://advancedplugins.net/img/bp/quests-min.png",
                "https://advancedplugins.net/api/cache.php?url=https://i.imgur.com/XzGwdy1.png",
                "https://advancedplugins.net/img/bp/create-quests-min.png",
                "https://advancedplugins.net/img/bp/leaderboard-min.png",
                "https://advancedplugins.net/img/bp/npc.gif",
                "https://advancedplugins.net/img/bp/logo-min.png"
              ],
              metaExtra: "Nguồn advancedplugins.net",
              marketplaceUrl: "https://advancedplugins.net/item/BattlePass.11"
            },
            {
              title: "Advanced Kits",
              subtitle: "by BuiltByBit",
              description: "Tài nguyên Advanced Kits trên BuiltByBit.",
              image: "https://builtbybit.com/attachments/21ad2018-7274-46d9-a893-a66d02bd1a4e-png.1346698/?preset=fullr2",
              source: "https://builtbybit.com/resources/advanced-kits.109727/it-vouchers%E2%9C%A8animations%E2%9C%A8mysql-yaml%E2%9A%A1%EF%B8%8Fv1-8-8-1-20%E2%9C%A6.332/",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1grVZNA0ZVnwnF6ommIdiv455jYqPhvfh",
                  primary: true
                }
              ],
              banner: "https://builtbybit.com/attachments/21ad2018-7274-46d9-a893-a66d02bd1a4e-png.1346698/?preset=fullr2",
              previewImages: [
                "https://builtbybit.com/attachments/21ad2018-7274-46d9-a893-a66d02bd1a4e-png.1346698/?preset=fullr2"
              ],
              metaExtra: "BuiltByBit",
              marketplaceUrl: "https://builtbybit.com/resources/advanced-kits.109727/it-vouchers%E2%9C%A8animations%E2%9C%A8mysql-yaml%E2%9A%A1%EF%B8%8Fv1-8-8-1-20%E2%9C%A6.332/"
            },
            {
              title: "Combatpets",
              subtitle: "by BuiltByBit",
              description: "Tài nguyên Combatpets Battle Pets With Leveling trên BuiltByBit.",
              image: "https://builtbybit.com/attachments/622da08ecd679cc0563517cd39726732f19025ef-png.857270/?preset=fullr2",
              source: "https://builtbybit.com/resources/combatpets-battle-pets-with-leveling.56344/",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1P7D-yvqAA5Cd3G4JSJNAQwRMwrX11GHd",
                  primary: true
                }
              ],
              previewImages: [
                "https://proxy.spigotmc.org/ecaf197349e744dabd5dc98546edd0cb7d6cc31e/68747470733a2f2f69696c692e696f2f64616a71766e652e77656270",
                "https://proxy.spigotmc.org/a8e6b0d7c6df8db62442dde4eec4f4a81a42c7d2/68747470733a2f2f69696c692e696f2f64616a714c74312e77656270",
                "https://proxy.spigotmc.org/631df327e7aa7fdcc92ccba859b6e560b4b36f06/68747470733a2f2f69696c692e696f2f64616a71744d672e77656270",
                "https://proxy.spigotmc.org/e08a69b073813ac3684899d5803954bc8888ba48/68747470733a2f2f69696c692e696f2f64616a716d4b4a2e77656270",
                "https://proxy.spigotmc.org/69111c35cf60b82874d485716a2b05e0e0177d18/68747470733a2f2f69696c692e696f2f64616a424a414e2e77656270",
                "https://proxy.spigotmc.org/061ba16d6c0db234e62ea8a3608198bc53536f8c/68747470733a2f2f69696c692e696f2f64616a424b566e2e77656270",
                "https://proxy.spigotmc.org/f2a68c73b7310efe9e96c7e1bb2f8186e424d05c/68747470733a2f2f69696c692e696f2f64616a42436c662e77656270",
                "https://proxy.spigotmc.org/47d16533b5489221e3ec4d4695c348acc9354b34/68747470733a2f2f69696c692e696f2f64616a713438512e77656270",
                "https://proxy.spigotmc.org/9f10fbe3f18996d2ef77b6c5a7bc129f58b69122/68747470733a2f2f69696c692e696f2f64616a717377502e77656270",
                "https://proxy.spigotmc.org/4dde8eaf478474da7dbd277147f1b31a5122d5f2/68747470733a2f2f69696c692e696f2f64616a426e53342e77656270",
                "https://proxy.spigotmc.org/66c4752ee3d75adc7192ce9e171d63da974b2f4a/68747470733a2f2f69696c692e696f2f64616a427a52322e77656270"
              ],
              metaExtra: "BuiltByBit",
              marketplaceUrl: "https://builtbybit.com/resources/combatpets-battle-pets-with-leveling.56344/"
            }
          ]
        },
        {
          id: "config",
          name: "Config",
          items: [
            {
              title: "RTP gui Config",
              subtitle: "Config dành cho Plugin betterRTP",
              description: "Cần thêm plugin deluxMenu",
              image: "https://builtbybit.com/attachments/rtp-cover-image-1024x-png.1199517/?preset=fullr2",
              source: "https://builtbybit.com/resources/rtp-gui-betterrtp-ia-nexo-oraxen.49062/",
              actions: [
                {
                  label: "Tải về",
                  url: "https://drive.google.com/uc?export=download&id=1uND_kjaaDMluVUXOQesgKZ9MvbFDIEa0",
                  primary: true
                }
              ],
              marketplaceUrl: "https://builtbybit.com/resources/rtp-gui-betterrtp-ia-nexo-oraxen.49062/"
            },
            {
              title: "Gui |Medieval Shop GUI (ShopGui+)",
              subtitle: "Nguồn MCModels",
              description: "CREATED BY[Turtle Pixels]",
              image: "https://api.mcmodels.net/storage/product-images/9409/01JXFSEJT55GQNF6Y9FH0VJ9JZ.png",
              source: "https://mcmodels.net/products/14399/medieval-shop-gui-shopgui",
              actions: [
                {
                  label: "Comming soon",
                  url: "#",
                  primary: true
                }
              ],
              banner: "https://api.mcmodels.net/storage/product-images/8664/01JXFRYJYC47BHQGVNJGQ6N1WZ.png",
              previewImages: [
                "https://api.mcmodels.net/storage/product-images/8664/01JXFRYJYC47BHQGVNJGQ6N1WZ.png",
                "https://api.mcmodels.net/storage/product-images/9564/g2vgT3WJv3Bcrean.png",
                "https://api.mcmodels.net/storage/product-images/9605/2953dNJSuZ7ujbeMELuyQJMNxMl1g5nWq9SBKxQr.png"
              ],
              metaExtra: "Nguồn MCModels",
              marketplaceUrl: "https://mcmodels.net/products/14399/medieval-shop-gui-shopgui"
            },
            {
              title: "Spectra Studios | Animated PlayerAuction UI + Upgrade Menu",
              subtitle: "Nguồn MCModels",
              description: "2. [Products](https://mcmodels.net/products)",
              image: "https://api.mcmodels.net/storage/product-images/13612/01JN9T4ER1XDJJC9376TFRQ7V6.webp",
              source: "https://mcmodels.net/products/13612/spectra-studios-animated-playerauction-ui-upgrade-menu?tab=reviews",
              actions: [
                {
                  label: "10.000 VND",
                  url: "https://discord.com/users/1342988693379747843",
                  primary: true
                }
              ],
              banner: "https://dashboard.mcmodels.net/storage/images/480f1a98-4396-459e-9c16-24403bd21893.png",
              previewImages: [
                "https://dashboard.mcmodels.net/storage/images/480f1a98-4396-459e-9c16-24403bd21893.png"
              ],
              metaExtra: "Nguồn MCModels",
              marketplaceUrl: "https://mcmodels.net/products/13612/spectra-studios-animated-playerauction-ui-upgrade-menu?tab=reviews"
            }
          ]
        },
        {
          id: "map",
          name: "Map",
          items: [
            {
              title: "Spawn - Oriental Valley",
              subtitle: "638x710 size",
              description: "Trải nghiệm map đi nào anh em",
              image: "https://api.mcmodels.net/storage/product-images/15109/01K7H8CEQYPTJ207QSQKQ41N0G.png",
              source: "https://builtbybit.com/resources/spawn-oriental-valley-638x710-size.61100/",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1Ldo8ElDr14lPSt4HQxspLQTZB_uHqQvd",
                  primary: true
                }
              ]
            },
            {
              title: "Summer cPvP spawn",
              subtitle: "Cristal PvP spawn",
              description: "Free \nCái này dùng litematica nha :)",
              image: "https://raw.githubusercontent.com/vgtuananh0055-spec/My-web/main/Icon%2Bvideo%2Bgif/attachments_untitled_design1-png.png",
              source: "",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1C7syTsJMiBCJ1Mlh76H4M1MH8bZwlFn0",
                  primary: true
                }
              ]
            }
          ]
        },
        {
          id: "model",
          name: "Model",
          items: [
            {
              title: "King MC",
              subtitle: "Model của kinh mc",
              description: "Vì KingMC ra bản mới với model mới nên mình sẽ leak model bản cũ :)",
              image: "https://i.postimg.cc/QMDV9LjY/kingmc-legendary-weapons-1.gif",
              source: "",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1ZizxneakJVbJz-oK8r-rpfDJiUmY-I8l",
                  primary: true
                }
              ]
            },
            {
              title: "Weapons - Vol 1 | Nazgul's Forge",
              subtitle: "Nguồn MCModels",
              description: "A pack of 10 high quality Fantasy weapons for your server!\nComes with:\nDrag & Drop configurations for ItemsAdder and Nexo\n\nTested on version 1.21.10",
              image: "https://api.mcmodels.net/storage/product-images/15595/01KE2YMQWC641QT4K7XQ50V161.gif",
              source: "https://mcmodels.net/products/15581/nazguls-fantasy-weapons-vol-1?srsltid=AfmBOoqD254U0N3mExGe9F4a6nMTBglsyhR8_h2dbcHKeGmGuzZhuzSi",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1eQMgT0I9ruS6d-tQxyF4Tk8TE6nilHJW",
                  primary: true
                }
              ],
              banner: "https://api.mcmodels.net/storage/product-images/18072/DFCXuwMJRk55eQbemJBDu2XISllnNi0EyRKrTmh8.png",
              previewImages: [
                "https://api.mcmodels.net/storage/product-images/15595/01KE2YMQWC641QT4K7XQ50V161.gif"
              ],
              metaExtra: "Nguồn MCModels",
              marketplaceUrl: "https://mcmodels.net/products/15581/nazguls-fantasy-weapons-vol-1?srsltid=AfmBOoqD254U0N3mExGe9F4a6nMTBglsyhR8_h2dbcHKeGmGuzZhuzSi"
            },
            {
              title: "Weapons - Vol 2| Nazgul's Forge",
              subtitle: "Nguồn MCModels",
              description: "A pack of 10 high quality Fantasy weapons for your server!\nComes with:\nDrag & Drop configurations for ItemsAdder and Nexo\n\nTested on version 1.21.4",
              image: "https://api.mcmodels.net/storage/product-images/15991/01KJQRPBD8CWXGFKV9CSN3PHN0.gif",
              source: "https://mcmodels.net/products/15595/nazguls-fantasy-weapons-vol-2?srsltid=AfmBOorhQoM5fQGIfO0d_5Tuchdjv7Gz_sFPNxJZjieFabKidBWbT76i",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1G1vWPXq7SVjaZLfQ-c2bx_kzKUzGDqNt",
                  primary: true
                }
              ],
              banner: "https://api.mcmodels.net/storage/product-images/18072/DFCXuwMJRk55eQbemJBDu2XISllnNi0EyRKrTmh8.png",
              previewImages: [
                "https://api.mcmodels.net/storage/product-images/15991/01KJQRPBD8CWXGFKV9CSN3PHN0.gif"
              ],
              metaExtra: "Nguồn MCModels",
              marketplaceUrl: "https://mcmodels.net/products/15595/nazguls-fantasy-weapons-vol-2?srsltid=AfmBOorhQoM5fQGIfO0d_5Tuchdjv7Gz_sFPNxJZjieFabKidBWbT76i"
            },
            {
              title: "Weapons - Vol 3| Nazgul's Forge",
              subtitle: "Nguồn MCModels",
              description: "A pack of 10 high quality Fantasy weapons for your server!\nComes with:\nDrag & Drop configurations for ItemsAdder and Nexo\n\nTested on version 1.21.4",
              image: "https://api.mcmodels.net/storage/product-images/15595/01KE2YMQWC641QT4K7XQ50V161.gif",
              source: "https://mcmodels.net/products/15636/nazguls-fantasy-weapons-vol-3?srsltid=AfmBOorerDTpiWorLl_7Rxfni9jK8k012ZReqYV5_JQFrdt2BUtSPghu",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1pJF-I_cZhCrGshqtIsMDeIc7etxbx6gi",
                  primary: true
                }
              ],
              banner: "https://api.mcmodels.net/storage/product-images/18072/DFCXuwMJRk55eQbemJBDu2XISllnNi0EyRKrTmh8.png",
              previewImages: [
                "https://api.mcmodels.net/storage/product-images/15595/01KE2YMQWC641QT4K7XQ50V161.gif"
              ],
              metaExtra: "Nguồn MCModels",
              marketplaceUrl: "https://mcmodels.net/products/15636/nazguls-fantasy-weapons-vol-3?srsltid=AfmBOorerDTpiWorLl_7Rxfni9jK8k012ZReqYV5_JQFrdt2BUtSPghu"
            },
            {
              title: "Dragon Mecha Overlord",
              subtitle: "Nguồn MCModels",
              description: "2. [Products](https://mcmodels.net/products)",
              image: "https://api.mcmodels.net/storage/product-images/15599/01KDXJ4JQ30HXYQWJTGYHAT5YQ.gif",
              source: "https://mcmodels.net/products/15599/dragon-mecha-overlord",
              actions: [
                {
                  label: "10.000 VND",
                  url: "https://discord.com/users/1342988693379747843",
                  primary: true
                }
              ],
              banner: "https://api.mcmodels.net/storage/product-images/15599/01KDXJ4JRSQNMSBKK9Y8CSN5S0.png",
              metaExtra: "Nguồn MCModels",
              marketplaceUrl: "https://mcmodels.net/products/15599/dragon-mecha-overlord"
            }
          ]
        }
      ]
    },
    bedrock: {
      label: "Bedrock",
      title: "MC Bedrock",
      sub: "Addon, map, texture pack, mashups, skin",
      grad: [
        "#ff5d8f",
        "#4a0f2b"
      ],
      bannerImg: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Vanilla-PMP_Carousel-Card_SGD-26_1280x720.jpg",
      iconImg: "",
      folders: [
        {
          id: "addon",
          name: "Addon",
          items: [
            {
              title: "Infinite Inventory Add-On 1.0",
              subtitle: "by Shapescape",
              description: "Không cần phải chạy đi chạy lại đến rương nữa. Không cần mang theo ba lô. Infinite Inventory cung cấp cho mọi người chơi một hệ thống lưu trữ có thể mở rộng, được phân chia theo tab ngay trong hành trang của họ! Lật trang, tự động gửi đồ nhặt được, v.v.",
              image: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/bc910f3f-6b5f-4649-a58f-4f549e5c6bf3/ii_Thumbnail_0.jpg",
              source: "https://www.minecraft.net/en-us/marketplace/pdp/shapescape/infinite-inventory-add--on-1.0/eb5f2ff5-60d1-4008-8f64-b38fd282660a",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=138Anl5vBsSbN2wc-88mLyQMRNmKlvzJF",
                  primary: true
                }
              ],
              banner: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/be6b6307-eabf-4125-a039-335d672ddcb3/ii_Screenshot_5.jpg",
              previewImages: [
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/be6b6307-eabf-4125-a039-335d672ddcb3/ii_Screenshot_5.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/65bdee64-c4ed-452e-ade8-0772a9cd30b0/ii_Screenshot_3.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/03bff1e2-8fea-42ff-9871-e5cce3833f27/ii_Screenshot_8.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/61fdc55b-972d-4f5c-adda-ecf7d671833e/ii_Screenshot_7.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/349b5d9f-b5b8-4a4c-9ebe-af15eacaba34/panorama_0.jpg"
              ],
              metaExtra: "Shapescape",
              marketplaceUrl: "https://www.minecraft.net/en-us/marketplace/pdp/shapescape/infinite-inventory-add--on-1.0/eb5f2ff5-60d1-4008-8f64-b38fd282660a"
            },
            {
              title: "Bedrock Reimagined v1.1",
              subtitle: "by 5 Frame Studios",
              description: "Bedrock Reimagined transforms survival. Battle 7 deadly bosses, manage thirst & temperature, hunt or be hunted by new mobs, travel with gliders, waypoints & air balloons, and store more with custom backpacks, chests & bundles. Explore reborn biomes with fresh gear & structures!\n\n7 new bosses\n1,500+ new items\n2,000+ new blocks\n4 difficulties: Easy, Medium, Hard, Brutal",
              image: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/16ac0694-a566-4de9-aa73-fbdc079a648f/BR_Thumbnail_0.jpg",
              source: "https://www.minecraft.net/en-us/marketplace/pdp/5-frame-studios/bedrock-reimagined-v1.1/9ac98f26-4374-43b9-820a-624352137e25",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1RRAKlbpJqXrF3Ahy7WmRGGyPWRwQ88sh",
                  primary: true
                }
              ],
              banner: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/3c088452-3ecb-4d5c-9f89-9995bd6fd165/BR_Screenshot_1.jpg",
              previewImages: [
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/3c088452-3ecb-4d5c-9f89-9995bd6fd165/BR_Screenshot_1.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/82cf0a10-b43f-4710-8f52-311d2f872149/BR_Screenshot_2.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/ee13f33b-fcfa-41e6-8e56-200ef30d646d/BR_Screenshot_3.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/16ac0694-a566-4de9-aa73-fbdc079a648f/BR_Thumbnail_0.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/6ac3a216-63ed-4111-90cd-21ad7fd400da/BR_panorama.jpg"
              ],
              metaExtra: "5 Frame Studios",
              marketplaceUrl: "https://www.minecraft.net/en-us/marketplace/pdp/5-frame-studios/bedrock-reimagined-v1.1/9ac98f26-4374-43b9-820a-624352137e25"
            },
            {
              title: "Minecraft Godzilla x Kong Addon | The best godzilla addon for mobile!",
              subtitle: "Nguồn KaiTouu",
              description: "You can create the most epic and explosive battle between Godzilla and Kong!",
              image: "https://mcpeaddons.com/wp-content/uploads/2024/07/godzilla-x-kong-addon-thumbnail.png?w=265&v=2",
              source: "https://mcpeaddons.com/godzilla-x-kong-addon/n#google_vignette",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://link4m.org/ntR12",
                  primary: true
                }
              ],
              banner: "https://mcpeaddons.com/wp-content/uploads/2024/07/godzilla-x-kong-addon-thumbnail.png?w=265&v=2",
              previewImages: [
                "https://mcpeaddons.com/wp-content/uploads/2024/07/godzilla-x-kong-addon-thumbnail.png?w=1536&v=2",
                "https://mcpeaddons.com/wp-content/uploads/2024/07/godzilla-x-kong-addon-01-1024x485.jpg",
                "https://mcpeaddons.com/wp-content/uploads/2024/07/godzilla-x-kong-addon-02-1024x485.jpg",
                "https://mcpeaddons.com/wp-content/uploads/2024/07/godzilla-x-kong-addon-03-1024x485.jpg",
                "https://mcpeaddons.com/wp-content/uploads/2024/07/godzilla-x-kong-addon-04-1024x485.jpg",
                "https://mcpeaddons.com/wp-content/uploads/2024/07/godzilla-x-kong-addon-05-1024x485.jpg"
              ],
              metaExtra: "Nguồn mcpeaddons.com",
              marketplaceUrl: "https://mcpeaddons.com/godzilla-x-kong-addon/n#google_vignette"
            }
          ]
        },
        {
          id: "map",
          name: "Map",
          items: [
            {
              title: "Chunk Expansion: Halloween Edition",
              subtitle: "by Wildphire",
              description: "This Halloween World changes the way you play.\nStart trapped in a single locked chunk and expand your territory one chunk at a time.\n\nComplete spooky missions, defeat monsters, collect hats and loot, and grow your world as you work towards beating the game.\n\n- Locked Chunk Start\n- Progressive Expansion\n- Halloween Mission Gameplay\n- Unique Survival Challenge",
              image: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/8203bee5-275f-49eb-8df2-961068318922/HCE_Thumbnail_0.jpg",
              source: "https://www.minecraft.net/en-us/marketplace/pdp/wildphire/chunk-expansion:-halloween-edition/aad01d55-f663-4ef7-8be9-6067c39d4ecc",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1tG_4Uoewi9eGiy2o4R8dV5Dq5aGlADA2",
                  primary: true
                }
              ],
              banner: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/92ef5083-8dca-4662-b6a2-e57392aab836/HCE_screenshot_1.jpg",
              previewImages: [
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/92ef5083-8dca-4662-b6a2-e57392aab836/HCE_screenshot_1.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/22be88d1-4dd2-48bc-b93e-05bad4cbd769/HCE_screenshot_2.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/8f8f7c1f-ced3-451f-b5db-374f675c8b4f/HCE_screenshot_3.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/8203bee5-275f-49eb-8df2-961068318922/HCE_Thumbnail_0.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/41011b16-efe9-4de7-8177-1c78f248e4b2/HCE_panorama_0.jpg"
              ],
              metaExtra: "Wildphire",
              marketplaceUrl: "https://www.minecraft.net/en-us/marketplace/pdp/wildphire/chunk-expansion:-halloween-edition/aad01d55-f663-4ef7-8be9-6067c39d4ecc"
            }
          ]
        },
        {
          id: "texture",
          name: "Texture pack",
          items: [
            {
              title: "Actions & Stuff 1.13",
              subtitle: "by Oreville Studios",
              description: "Minecraft Java & Bedrock...",
              image: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/85b9d40c-405e-4d79-8912-b2d5af3bdd74/actionsandstuff_Thumbnail_0.jpg",
              source: "https://www.minecraft.net/en-us/marketplace/pdp/oreville-studios/actions--stuff-1.13/61c7a786-d7ad-49e0-a710-817121cd9795",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1fQJuGdtmEzbzCBCCdJdw3S6xad_3Jpf1",
                  primary: true
                }
              ],
              banner: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/d1b135b3-246f-4947-86ba-d5304f17184e/actionsandstuff_screenshot_2.jpg",
              previewImages: [
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/d1b135b3-246f-4947-86ba-d5304f17184e/actionsandstuff_screenshot_2.jpg"
              ],
              metaExtra: "Oreville Studios",
              marketplaceUrl: "https://www.minecraft.net/en-us/marketplace/pdp/oreville-studios/actions--stuff-1.13/61c7a786-d7ad-49e0-a710-817121cd9795"
            },
            {
              title: "Actions & Stuff: Flat Textures",
              subtitle: "by Oreville Studios",
              description: "Flat Textures by Oreville",
              image: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/d8981720-c971-4e26-882c-8983b6c7f7b1/actionsandstuffflattextures_Thumbnail_0.jpg",
              source: "https://www.minecraft.net/pt-br/marketplace/pdp/oreville-studios/actions--stuff:-flat-textures/c627051d-d062-4322-a533-a7b52238500d",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1udIJeJfi_-lOd7AVKLzF4qNqcbg1LesU",
                  primary: true
                }
              ],
              banner: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/d8981720-c971-4e26-882c-8983b6c7f7b1/actionsandstuffflattextures_Thumbnail_0.jpgenshot_2.jpg",
              previewImages: [
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/d8981720-c971-4e26-882c-8983b6c7f7b1/actionsandstuffflattextures_Thumbnail_0.jpg"
              ],
              metaExtra: "Oreville Studios",
              marketplaceUrl: "https://www.minecraft.net/pt-br/marketplace/pdp/oreville-studios/actions--stuff:-flat-textures/c627051d-d062-4322-a533-a7b52238500d"
            },
            {
              title: "Scary Visuals",
              subtitle: "by Chunklabs",
              description: "Search  Close search  Suggested searches   Popular Discoveries  ![Image 62: Steve and Alex on a grassy hill in the daytime with other mobs and characters in the backgroundMinecraft](https://www.minecraft.net/en-us/about-minecraft)  ![Image 63: Minecraft characters look at various new content available on the marketplaceSkins & DLC](https://www.minecraft.net/en-us/marketplace)  ![Image 64: Steve, Alex, and various other characters standing in dark room.Change Java Skins & Capes](https://www.minecraft.net/en-us/msaprofile/mygames/editskin)  ![Image 65: Steve, Alex, and various other characters and animals burst out of a nether portal below text reading: Minecraft RealmsMinecraft Realms](https://www.minecraft.net/en-us/realms)\n\nMinecraft Java & Bedrock Minecraft Dungeons II Minecraft Dungeons Minecraft Legends Minecraft Education",
              image: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/6bc8f537-e007-42da-89c9-4aeaaaff1ee1/Scary_Visuals_Thumbnail_0.jpg",
              source: "https://www.minecraft.net/en-us/marketplace/pdp/chunklabs/scary-visuals/a1fbcaf9-5e43-4a48-9447-5ad08c8b0f3c",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1onMfKZPFRvVTNDnPqd9C1aIhGmqu-gNr",
                  primary: true
                }
              ],
              banner: "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/6183c280-3398-4d2d-8783-e51d3a585ffc/Scary_Visuals_screenshot_1.jpg",
              previewImages: [
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/6183c280-3398-4d2d-8783-e51d3a585ffc/Scary_Visuals_screenshot_1.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/29f12fce-3352-49b0-a0c1-5b2db812382d/Scary_Visuals_screenshot_2.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/e1b10a71-2792-4a84-9992-73ba301e0bc8/Scary_Visuals_screenshot_3.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/6bc8f537-e007-42da-89c9-4aeaaaff1ee1/Scary_Visuals_Thumbnail_0.jpg",
                "https://content2.prod.catalog.playfab.com/pf-namespace-b63a0803d3653643/4d72ceed-e73f-47e6-9e33-222c0c4765d1/Scary_Visuals_panorama_0.jpg"
              ],
              metaExtra: "Chunklabs",
              marketplaceUrl: "https://www.minecraft.net/en-us/marketplace/pdp/chunklabs/scary-visuals/a1fbcaf9-5e43-4a48-9447-5ad08c8b0f3c"
            },
            {
              title: "Play Wilderness Bound",
              subtitle: "by Minecraft Marketplace",
              description: "Wilderness Bound là một bản cập nhật trò chơi được phát hành vào ngày 15 tháng 9 năm 2026. Nó tập trung vào quần xã sinh vật rừng lốm đốm , bổ sung cây dương với ba màu lá khác nhau , một loại gỗ mới và các khối tự nhiên mới. Nó cũng bổ sung cầu thang và tấm lát cho bê tông và len , đệm , giường rơm , trại bỏ hoang và bản đồ được cải tiến . Nó được công bố tại Minecraft Live – tháng 5 năm 2026",
              image: "https://minecraft.wiki/images/Wilderness_Bound_Key_Art_with_text.jpeg?55bcf",
              source: "https://www.minecraft.net/en-us/updates/wilderness-bound-drop",
              actions: [
                {
                  label: "Tải xuống",
                  url: "https://drive.google.com/uc?export=download&id=1PCk0xvEjMY2r2pqOT0378CKPn31pJPF-",
                  primary: true
                }
              ],
              banner: "https://minecraft.wiki/images/Wilderness_Bound_Key_Art_with_text.jpeg?55bcf",
              previewImages: [
                "https://minecraft.wiki/images/thumb/Minecraft_Wilderness_Bound_.Net.jpg/1280px-Minecraft_Wilderness_Bound_.Net.jpg?a2656",
                "https://minecraft.wiki/images/thumb/Wilderness_Bound_Haunts_And_Harvest_key_art.webp/1280px-Wilderness_Bound_Haunts_And_Harvest_key_art.webp?5563e"
              ],
              metaExtra: "Minecraft Marketplace",
              marketplaceUrl: "https://www.minecraft.net/en-us/updates/wilderness-bound-drop"
            }
          ]
        },
        {
          id: "mashups",
          name: "Mashups",
          items: []
        },
        {
          id: "skin",
          name: "Skin",
          items: []
        }
      ]
    },
    info: {
      label: "Thông tin",
      title: "Thông tin",
      sub: "Theo dõi mình ở các kênh này",
      grad: [
        "#22d3c5",
        "#0b2f45"
      ],
      bannerImg: "https://i.ytimg.com/vi/r2-fPptTmnc/maxresdefault.jpg",
      iconImg: "https://steamuserimages-a.akamaihd.net/ugc/1941632041722443150/B8E4F780CB5E46A421C2A0061E0CE26DC408C73D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false?interpolation=lanczos-none&output-format=jpeg&output-quality=70&fit=inside|637:358&composite-to=*,*|637:358&background-color=f0f0f0",
      links: [
        {
          name: "Facebook",
          desc: "Trang cá nhân",
          app: "facebook",
          url: "https://www.facebook.com/share/1CDptvaAic/"
        },
        {
          name: "TikTok",
          desc: "@tunkt_2005",
          app: "tiktok",
          url: "https://www.tiktok.com/@tunkt_2005?_r=1&_t=ZS-9B3CosmEWgM"
        },
        {
          name: "Telegram",
          desc: "@Ismekaitou",
          app: "telegram",
          url: "https://t.me/Ismekaitou"
        },
        {
          name: "YouTube",
          desc: "@kaitouaonhayy",
          app: "youtube",
          url: "https://youtube.com/@kaitouaonhayy"
        },
        {
          name: "Discord",
          desc: "Nhắn tin riêng",
          app: "discord",
          url: "https://discord.com/users/1342988693379747843"
        }
      ]
    }
  },
  welcome: {
    active: false,
    title: "Hello - KaiTouu đây",
    desc: "Đối với Bedrock thì toàn bộ được lấy từ marketplace (shop chinhd thức) của minecraft nên chắc có thể web sẽ bị ăn gậy\nKo có Addon hay texturepack nào thì anh em cứ nói nha\nVÀ HÃY PHÂN BIỆT ĐƯỢC GIỮA ADDON, TEXTUREPACK VỚI MOD VÀ RESOURCES PACK",
    btn: "Đã hiểu & Tiếp tục"
  }
};
/* ===== HẾT PHẦN SỬA ===== */