const games = [
    {
    "gameID": "612",
    "steamAppID": null,
    "cheapest": "15.95",
    "cheapestDealID": "0f%2B4gT2VVUn4UcmFzPxXnuqoXKAOYoJ5mpFZRWNyohc%3D",
    "external": "LEGO Batman",
    "internalName": "LEGOBATMAN",
    "thumb": "https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg"
    },
    {
    "gameID": "167613",
    "steamAppID": null,
    "cheapest": "15.95",
    "cheapestDealID": "2XSMlnYtPjLoKI9g2vhZch9deHZ%2BE%2BpL7IoBprkWtgM%3D",
    "external": "LEGO Batman 2",
    "internalName": "LEGOBATMAN2",
    "thumb": "https://cdn.fanatical.com/production/product/400x225/4cf0701e-77bf-4539-bda7-129ab3e81f8b.jpeg"
    },
    {
    "gameID": "167910",
    "steamAppID": "502820",
    "cheapest": "4.99",
    "cheapestDealID": "Vv2BkWU%2FEoIlHNbYtLBFjLJP8noeCUodfp1IXbQJZ6w%3D",
    "external": "Batman: Arkham VR",
    "internalName": "BATMANARKHAMVR",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/502820/capsule_sm_120.jpg?t=1684483128"
    },
    {
    "gameID": "136751",
    "steamAppID": null,
    "cheapest": "49.99",
    "cheapestDealID": "tWdHYhBxTi%2Boen9dGX6I0I%2BfklTJOHB0SykaLcbpsqk%3D",
    "external": "LEGO Batman Trilogy",
    "internalName": "LEGOBATMANTRILOGY",
    "thumb": "https://hb.imgix.net/fec566de2b11fbe22a542086fb3758652f790551.jpg?auto=compress,format&fit=crop&h=84&w=135&s=1159b53389e7c72d23ef72b5c883d725"
    },
    {
    "gameID": "107598",
    "steamAppID": "208650",
    "cheapest": "3.99",
    "cheapestDealID": "%2BRR8iNYa2ZB%2FIhfZml8B1USYGhQVeYAv0Tl8JPkZ8UM%3D",
    "external": "Batman: Arkham Knight",
    "internalName": "BATMANARKHAMKNIGHT",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/capsule_sm_120.jpg?t=1702934528"
    },
    {
    "gameID": "97941",
    "steamAppID": "209000",
    "cheapest": "3.99",
    "cheapestDealID": "6YSaSYFA%2Bjmj9L4HsCBLThDoYEUhWPQ1ssIZ0t2k%2BnU%3D",
    "external": "Batman: Arkham Origins",
    "internalName": "BATMANARKHAMORIGINS",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/209000/capsule_sm_120.jpg?t=1681234740"
    },
    {
    "gameID": "198190",
    "steamAppID": null,
    "cheapest": "15.99",
    "cheapestDealID": "DnVEZriqpYWyJoC4CN2%2Fe07Su8RZ61DATyjmfNk%2FwKI%3D",
    "external": "Batman Arkham City GOTY",
    "internalName": "BATMANARKHAMCITYGOTY",
    "thumb": "https://us.gamesplanet.com/acache/15/46/1/us/packshot-92b3116edd0584b61a131fa716d0a766.jpg"
    },
    {
    "gameID": "198317",
    "steamAppID": "320795",
    "cheapest": "8.99",
    "cheapestDealID": "g5zcqhDot%2FhT5s%2BIfHgygYaagbxBH09cSgR5xdyVS5g%3D",
    "external": "Batman: Arkham Collection",
    "internalName": "BATMANARKHAMCOLLECTION",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/subs/320795/capsule_sm_120.jpg?t=1636658684"
    },
    {
    "gameID": "2425",
    "steamAppID": "21000",
    "cheapest": "2.99",
    "cheapestDealID": "uCO441gpSEGJP6K9x66LeC7yi7ILolaTmvo8lOMCdIc%3D",
    "external": "LEGO Batman: The Videogame",
    "internalName": "LEGOBATMANTHEVIDEOGAME",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/capsule_sm_120.jpg?t=1681923978"
    },
    {
    "gameID": "126255",
    "steamAppID": "313690",
    "cheapest": "2.99",
    "cheapestDealID": "%2BA3ge6nu7jMLKH1mWUj9rq6VYWRTsENzY%2B08DdMR1FE%3D",
    "external": "LEGO Batman 3: Beyond Gotham",
    "internalName": "LEGOBATMAN3BEYONDGOTHAM",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/313690/capsule_sm_120.jpg?t=1573510385"
    },
    {
    "gameID": "199261",
    "steamAppID": null,
    "cheapest": "39.98",
    "cheapestDealID": "vVlFdl8%2BVYZuEwKlNPy7iUrK49IXdqtNSKDgTrhw4sM%3D",
    "external": "Batman Game of the Year Pack",
    "internalName": "BATMANGAMEOFTHEYEARPACK",
    "thumb": "https://images.greenmangaming.com/9c282eceace145df99f76f0d08febdfe/1fbba96f5f8a4ffbb135e320bcc2346c.jpg"
    },
    {
    "gameID": "155074",
    "steamAppID": "498240",
    "cheapest": "5.99",
    "cheapestDealID": "uSsyxlu%2BfwGY%2FuhQ813YGUsHJmjOSI%2B7wANjAMlsbtw%3D",
    "external": "Batman - The Telltale Series",
    "internalName": "BATMANTHETELLTALESERIES",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/498240/capsule_sm_120.jpg?t=1686747257"
    },
    {
    "gameID": "262248",
    "steamAppID": null,
    "cheapest": "14.99",
    "cheapestDealID": "OKARgK1wBMW6W6Mod6tfJ%2FS582x6mmaZzcsrhKNN9zw%3D",
    "external": "HOT WHEELS - Batman Expansion",
    "internalName": "HOTWHEELSBATMANEXPANSION",
    "thumb": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSBatmanExpansion_MilestoneSrl_DLC_S2_1200x1600-eb509c7f016c85c206fb702fe7483ebf"
    },
    {
    "gameID": "88269",
    "steamAppID": "213330",
    "cheapest": "2.99",
    "cheapestDealID": "PLK%2BInMYUooml%2FkEGWW%2Bw8MluNwy5q9ZSzKcLaciTU4%3D",
    "external": "LEGO Batman 2: DC Super Heroes",
    "internalName": "LEGOBATMAN2DCSUPERHEROES",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/213330/capsule_sm_120.jpg?t=1681923916"
    },
    {
    "gameID": "214905",
    "steamAppID": null,
    "cheapest": "4.99",
    "cheapestDealID": "OTJxScRuO1D3hoLSFDjrWKZKm%2FrcXvSACoDDGijZjrY%3D",
    "external": "Telltale Batman Shadows Mode",
    "internalName": "TELLTALEBATMANSHADOWSMODE",
    "thumb": "https://images.gog-statics.com/e60c4596e9f9a74ca587efcb561b94d0e61e80648bd478a7e74ec8f6cd93c44a_product_tile_117h.webp"
    },
    {
    "gameID": "89107",
    "steamAppID": null,
    "cheapest": "19.99",
    "cheapestDealID": "yPE8bI5eH%2FFwI0L7KaEUTfOzYmWLPj%2F76DHrJEnFWeY%3D",
    "external": "Batman: Arkham City GOTY Edition",
    "internalName": "BATMANARKHAMCITYGOTYEDITION",
    "thumb": "https://hb.imgix.net/08abd0c1b25f2ffc652ae7d6537443cee7eccf94.jpg?auto=compress,format&fit=crop&h=84&w=135&s=6ae6339224425ee6e7b7e48ddea68e1d"
    },
    {
    "gameID": "143771",
    "steamAppID": null,
    "cheapest": "5.00",
    "cheapestDealID": "N0aiUBib2nX52PNBU37BWWfDDD%2FhkbcYlPHCQUxmuQ8%3D",
    "external": "Batman: Arkham Knight - Season Pass",
    "internalName": "BATMANARKHAMKNIGHTSEASONPASS",
    "thumb": "https://sttc.gamersgate.com/images/product/batmantm-arkham-knight-season-pass/cover-180-5d9655.jpg"
    },
    {
    "gameID": "214906",
    "steamAppID": null,
    "cheapest": "14.98",
    "cheapestDealID": "A3hjhaYvTj0ZcYKpdslQ4PASVGEwe0Zwfrd61gkWLXE%3D",
    "external": "Telltale Batman Shadows Edition",
    "internalName": "TELLTALEBATMANSHADOWSEDITION",
    "thumb": "https://images.greenmangaming.com/bb1f86edd3be41e3bb8948c00523e5ef/bd6b538c1a7b4f138b862d3c825ff005.jpg"
    },
    {
    "gameID": "87778",
    "steamAppID": null,
    "cheapest": "16.99",
    "cheapestDealID": "uppD8xHMJiqlB88HAnAVeVuInMdQh8eIXN0r2eaC6VI%3D",
    "external": "Batman Arkham Asylum GOTY Edition",
    "internalName": "BATMANARKHAMASYLUMGOTYEDITION",
    "thumb": "https://hb.imgix.net/2a07e9e90c9af53c5120151c9ff4e0aa3771ce99.jpeg?auto=compress,format&fit=crop&h=84&w=135&s=0f42069b4949098d7d589d28a9f66311"
    },
    {
    "gameID": "246183",
    "steamAppID": null,
    "cheapest": "19.99",
    "cheapestDealID": "3VlwNpcd%2FDMETYgzpXd1WDzLWBTn9qHFBhtkSUbnCMs%3D",
    "external": "Batman Arkham City: Game of the Year",
    "internalName": "BATMANARKHAMCITYGAMEOFTHEYEAR",
    "thumb": "https://images.greenmangaming.com/3e529338224949f280276fa6a5b75fec/933b9d36ea2d49b4b389899814729378.jpg"
    },
    {
    "gameID": "102510",
    "steamAppID": null,
    "cheapest": "14.99",
    "cheapestDealID": "%2BThIUJIoyxRy9u7NDjuvidcljQ6heP%2FiEmWT%2FkUc5aE%3D",
    "external": "Batman Arkham Origins Season Pass",
    "internalName": "BATMANARKHAMORIGINSSEASONPASS",
    "thumb": "https://images.greenmangaming.com/1c43fd1ff43744c08e854d6ff963c91d/2c8b09a294f4401ab3747b99b6d828f1.jpg"
    },
    {
    "gameID": "214907",
    "steamAppID": null,
    "cheapest": "4.99",
    "cheapestDealID": "lBW7zyO4rDYgP9peypdBSZC%2B6dp8bUJMtwXlUVt9ghY%3D",
    "external": "Batman Shadows Mode: The Enemy Within",
    "internalName": "BATMANSHADOWSMODETHEENEMYWITHIN",
    "thumb": "https://images.gog-statics.com/70d653226ede85bb70a8d4022a2d02b6c2e2bb9775e87b6a9ca5c30d6ac7f815_product_tile_117h.webp"
    },
    {
    "gameID": "221906",
    "steamAppID": null,
    "cheapest": "4.99",
    "cheapestDealID": "E7P6Oz50WDEWzQZZjj8b1l6e7C3S0sr43hOQnoDCtqk%3D",
    "external": "Batman - The Enemy Within Shadows Mode",
    "internalName": "BATMANTHEENEMYWITHINSHADOWSMODE",
    "thumb": "https://images.greenmangaming.com/85ad7081bac34a3cb4151daeb6540b50/9e93071c54604454974132c72bab146f.jpg"
    },
    {
    "gameID": "246576",
    "steamAppID": null,
    "cheapest": "29.99",
    "cheapestDealID": "Fi5iMIssmS3PtiA3m42zXTR22B9GvIcr2NE8Csb5kFw%3D",
    "external": "The Telltale Batman Shadows Edition",
    "internalName": "THETELLTALEBATMANSHADOWSEDITION",
    "thumb": "https://cdn1.epicgames.com/f2bfff793b224f6190a394f461c9a4b8/offer/TheTelltaleBatmanShadowsEdition-2560x1440-1ababb36a948b5c732ab85a330787e85.jpg"
    },
    {
    "gameID": "225758",
    "steamAppID": null,
    "cheapest": "4.99",
    "cheapestDealID": "PUPfxJiMyt4dbcslwvOVad0v%2BgtknEhy8c90qOpVp9w%3D",
    "external": "Telltale Batman Shadows Mode Bundle",
    "internalName": "TELLTALEBATMANSHADOWSMODEBUNDLE",
    "thumb": "https://hb.imgix.net/bcd6694f5442c730d3b16bdb07e956e52fe17b32.png?auto=compress,format&fit=crop&h=84&w=135&s=748daa2aa04096c42a24db2baf8320ff"
    },
    {
    "gameID": "250727",
    "steamAppID": null,
    "cheapest": "19.99",
    "cheapestDealID": "WT%2FMFjw1bIOhh5gs6slTqvwUdrGR2W4wEwyYGlT1G98%3D",
    "external": "Batman: Arkham Asylum Game of the Year",
    "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAR",
    "thumb": "https://images.greenmangaming.com/0c2b457baa0a4e778c31771ead715300/88c9e725b8ff4610a2e1970e0f4a08f1.jpg"
    },
    {
    "gameID": "143817",
    "steamAppID": null,
    "cheapest": "31.88",
    "cheapestDealID": "5Cwq5t9J3RKsRCP3EYIktz2QNQkzl%2FZ9ZvqHJz8N7Ik%3D",
    "external": "Batman: Arkham Knight - Premium Edition",
    "internalName": "BATMANARKHAMKNIGHTPREMIUMEDITION",
    "thumb": "https://images.greenmangaming.com/b47c3b1bc8a5468ab3ada8832be8355c/4de3b472f988463abf6a869bcdda44d7.jpg"
    },
    {
    "gameID": "108605",
    "steamAppID": null,
    "cheapest": "8.49",
    "cheapestDealID": "1kwCcJiqxMJJyas58G3FQ4Od%2BbujQrxSF19FRSAmcPE%3D",
    "external": "Batman: Arkham Origins - Cold, Cold Heart",
    "internalName": "BATMANARKHAMORIGINSCOLDCOLDHEART",
    "thumb": "https://images.greenmangaming.com/ba8d4cd6e14e40fca132f346e2d0d3b4/44f1b54092f3498f88b3d7c1df88451b.jpg"
    },
    {
    "gameID": "136749",
    "steamAppID": null,
    "cheapest": "3.00",
    "cheapestDealID": "k1S33Cgc2ot%2BV%2BxJVUyBogaB0PxBSNK5mFY32oX8npU%3D",
    "external": "LEGO Batman 3: Beyond Gotham Season Pass",
    "internalName": "LEGOBATMAN3BEYONDGOTHAMSEASONPASS",
    "thumb": "https://sttc.gamersgate.com/images/product/lego-batman-3-beyond-gotham-season-pass/cover-180-e8ad17.jpg"
    },
    {
    "gameID": "221904",
    "steamAppID": null,
    "cheapest": "4.99",
    "cheapestDealID": "oWzY%2BWDZExyELDQrL4xy3kd6P1p%2BOQMQ%2FIOeMaN0QaU%3D",
    "external": "Batman - The Telltale Series Shadows Mode",
    "internalName": "BATMANTHETELLTALESERIESSHADOWSMODE",
    "thumb": "https://images.greenmangaming.com/9cc80f2eb57e4588b159b818fed76288/7afd0ac5cde2472b8fde02a4720dc0ad.jpg"
    },
    {
    "gameID": "89095",
    "steamAppID": "200260",
    "cheapest": "3.99",
    "cheapestDealID": "RPqJV%2BI3Cw5NOoq%2B89MzssePMS%2BQgv2M1OnDzsdR0Jo%3D",
    "external": "Batman Arkham City Game of the Year Edition",
    "internalName": "BATMANARKHAMCITYGAMEOFTHEYEAREDITION",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/capsule_sm_120.jpg?t=1702934622"
    },
    {
    "gameID": "178376",
    "steamAppID": null,
    "cheapest": "34.99",
    "cheapestDealID": "pTeQKzHuRK4TDqHYLY4xolVHA5s%2BVlwXQrlqzqnLCks%3D",
    "external": "LEGO Batman 3: Beyond Gotham Premium Edition",
    "internalName": "LEGOBATMAN3BEYONDGOTHAMPREMIUMEDITION",
    "thumb": "https://images.gog-statics.com/0d81cdadc840148cbd6e1f1a6897bdf9d38994b3045c7a394f8426a82775b9f4_product_tile_117h.webp"
    },
    {
    "gameID": "171102",
    "steamAppID": "675260",
    "cheapest": "5.99",
    "cheapestDealID": "O3R9Lb8H5%2FOde%2BYxvObV4bHESrZT7WooRK6Re4QKtLw%3D",
    "external": "Batman: The Enemy Within - The Telltale Series",
    "internalName": "BATMANTHEENEMYWITHINTHETELLTALESERIES",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/675260/capsule_sm_120.jpg?t=1686747613"
    },
    {
    "gameID": "146",
    "steamAppID": "35140",
    "cheapest": "3.99",
    "cheapestDealID": "HR5V6hEl39sGwYodeqwwWuo8dKtKukteV0W9we9pI7I%3D",
    "external": "Batman: Arkham Asylum Game of the Year Edition",
    "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAREDITION",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/35140/capsule_sm_120.jpg?t=1702934705"
    },
    {
    "gameID": "107869",
    "steamAppID": "267490",
    "cheapest": "3.99",
    "cheapestDealID": "6aW%2BsA5i2cZ8pb2wvI0kuSfspYxuaeFKWl2iWWoCU7k%3D",
    "external": "Batman: Arkham Origins Blackgate - Deluxe Edition",
    "internalName": "BATMANARKHAMORIGINSBLACKGATEDELUXEEDITION",
    "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/267490/capsule_sm_120.jpg?t=1651865751"
    },
    {
    "gameID": "250195",
    "steamAppID": null,
    "cheapest": "2.99",
    "cheapestDealID": "A2XgGTglsm6iTyN%2BzxnWqIrErGb1uxYlGt4vUZyeG0k%3D",
    "external": "LEGO DC Super-Villains Batman: The Animated Series Level Pack",
    "internalName": "LEGODCSUPERVILLAINSBATMANTHEANIMATEDSERIESLEVELPACK",
    "thumb": "https://images.gog-statics.com/7b55f49b5d2898986176e45d97391b263cc46b804ce7e8dc81ecb242c72f1e7d_product_tile_117h.webp"
    }
    ]
    
    const gametuk = games.filter(function(element, index){
        return Number(element.cheapest) < 5 
    }) 
    
    console.log(gametuk)

    const Animeeiei = {
        "pagination": {
            "last_visible_page": 1,
            "has_next_page": false,
            "current_page": 1,
            "items": {
                "count": 24,
                "total": 24,
                "per_page": 25
            }
        },
        "data": [
            {
                "mal_id": 16498,
                "url": "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/10/47347t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/10/47347l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/10/47347.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/10/47347t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/10/47347l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "LHtdKWJdif4",
                    "url": "https://www.youtube.com/watch?v=LHtdKWJdif4",
                    "embed_url": "https://www.youtube.com/embed/LHtdKWJdif4?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/LHtdKWJdif4/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/LHtdKWJdif4/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/LHtdKWJdif4/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/LHtdKWJdif4/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/LHtdKWJdif4/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin"
                    },
                    {
                        "type": "Synonym",
                        "title": "AoT"
                    },
                    {
                        "type": "Synonym",
                        "title": "SnK"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan"
                    },
                    {
                        "type": "German",
                        "title": "Attack on Titan"
                    },
                    {
                        "type": "Spanish",
                        "title": "Ataque a los Titanes"
                    },
                    {
                        "type": "French",
                        "title": "L'Attaque des Titans"
                    }
                ],
                "title": "Shingeki no Kyojin",
                "title_english": "Attack on Titan",
                "title_japanese": "進撃の巨人",
                "title_synonyms": [
                    "AoT",
                    "SnK"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 25,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2013-04-07T00:00:00+00:00",
                    "to": "2013-09-29T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 7,
                            "month": 4,
                            "year": 2013
                        },
                        "to": {
                            "day": 29,
                            "month": 9,
                            "year": 2013
                        }
                    },
                    "string": "Apr 7, 2013 to Sep 29, 2013"
                },
                "duration": "24 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.55,
                "scored_by": 2846811,
                "rank": 110,
                "popularity": 1,
                "members": 4028711,
                "favorites": 174104,
                "synopsis": "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.\n\n[Written by MAL Rewrite]",
                "background": "Shingeki no Kyojin adapts content from the first eight volumes of Hajime Isayama's award-winning manga of the same name. The anime won the Animation of the Year in the Television category at the Tokyo Anime Award Festival in 2014.",
                "season": "spring",
                "year": 2013,
                "broadcast": {
                    "day": "Sundays",
                    "time": "01:58",
                    "timezone": "Asia/Tokyo",
                    "string": "Sundays at 01:58 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 46,
                        "type": "anime",
                        "name": "Award Winning",
                        "url": "https://myanimelist.net/anime/genre/46/Award_Winning"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 35122,
                "url": "https://myanimelist.net/anime/35122/Shingeki_no_Kyotou",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/3/84716.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/3/84716t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/3/84716l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/3/84716.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/3/84716t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/3/84716l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyotou"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin: Attack on Skytree"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨塔"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Skytree"
                    }
                ],
                "title": "Shingeki no Kyotou",
                "title_english": "Attack on Skytree",
                "title_japanese": "進撃の巨塔",
                "title_synonyms": [
                    "Shingeki no Kyojin: Attack on Skytree",
                    "Attack on Titan"
                ],
                "type": "Movie",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2017-04-10T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 10,
                            "month": 4,
                            "year": 2017
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Apr 10, 2017"
                },
                "duration": "7 min",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.38,
                "scored_by": 7409,
                "rank": 7486,
                "popularity": 4449,
                "members": 26130,
                "favorites": 86,
                "synopsis": "A special anime featuring a battle against the Colossal Titan screened at the Tokyo Skytree.\n\nIn the short, the characters from Shingeki no Kyojin are part of the Sky Survey Corps, protecting the Wall Skytree, a section of the walled city that contains the Skytree. The Sky Survey Corps find that the Wall Skytree is under attack by an army of titans, including a giant 350 meter-class titan that has suddenly appeared next to the Skytree and remains motionless.\n\n(Source: Anime Now!)",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    }
                ],
                "licensors": [],
                "studios": [],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Fantasy",
                        "url": "https://myanimelist.net/anime/genre/10/Fantasy"
                    }
                ],
                "explicit_genres": [],
                "themes": [],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 59571,
                "url": "https://myanimelist.net/anime/59571/Shingeki_no_Kyojin_Movie__Kanketsu-hen_-_The_Last_Attack",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1972/144820.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1972/144820t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1972/144820l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1972/144820.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1972/144820t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1972/144820l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "If0mCZzgAns",
                    "url": "https://www.youtube.com/watch?v=If0mCZzgAns",
                    "embed_url": "https://www.youtube.com/embed/If0mCZzgAns?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/If0mCZzgAns/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/If0mCZzgAns/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/If0mCZzgAns/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/If0mCZzgAns/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/If0mCZzgAns/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin Movie: Kanketsu-hen - The Last Attack"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan the Movie: The Last Attack"
                    },
                    {
                        "type": "Japanese",
                        "title": "劇場版 進撃の巨人 完結編 THE LAST ATTACK"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: The Last Attack"
                    }
                ],
                "title": "Shingeki no Kyojin Movie: Kanketsu-hen - The Last Attack",
                "title_english": "Attack on Titan: The Last Attack",
                "title_japanese": "劇場版 進撃の巨人 完結編 THE LAST ATTACK",
                "title_synonyms": [
                    "Attack on Titan the Movie: The Last Attack"
                ],
                "type": "Movie",
                "source": "Manga",
                "episodes": 1,
                "status": "Not yet aired",
                "airing": false,
                "aired": {
                    "from": "2024-11-08T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 8,
                            "month": 11,
                            "year": 2024
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Nov 8, 2024"
                },
                "duration": "2 hr 25 min",
                "rating": "R - 17+ (violence & profanity)",
                "score": null,
                "scored_by": null,
                "rank": null,
                "popularity": 5316,
                "members": 16972,
                "favorites": 59,
                "synopsis": "A compilation movie for Shingeki no Kyojin: The Final Season - Kanketsu-hen.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 569,
                        "type": "anime",
                        "name": "MAPPA",
                        "url": "https://myanimelist.net/anime/producer/569/MAPPA"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 59571,
                "url": "https://myanimelist.net/anime/59571/Shingeki_no_Kyojin_Movie__Kanketsu-hen_-_The_Last_Attack",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1972/144820.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1972/144820t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1972/144820l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1972/144820.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1972/144820t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1972/144820l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "If0mCZzgAns",
                    "url": "https://www.youtube.com/watch?v=If0mCZzgAns",
                    "embed_url": "https://www.youtube.com/embed/If0mCZzgAns?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/If0mCZzgAns/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/If0mCZzgAns/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/If0mCZzgAns/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/If0mCZzgAns/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/If0mCZzgAns/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin Movie: Kanketsu-hen - The Last Attack"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan the Movie: The Last Attack"
                    },
                    {
                        "type": "Japanese",
                        "title": "劇場版 進撃の巨人 完結編 THE LAST ATTACK"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: The Last Attack"
                    }
                ],
                "title": "Shingeki no Kyojin Movie: Kanketsu-hen - The Last Attack",
                "title_english": "Attack on Titan: The Last Attack",
                "title_japanese": "劇場版 進撃の巨人 完結編 THE LAST ATTACK",
                "title_synonyms": [
                    "Attack on Titan the Movie: The Last Attack"
                ],
                "type": "Movie",
                "source": "Manga",
                "episodes": 1,
                "status": "Not yet aired",
                "airing": false,
                "aired": {
                    "from": "2024-11-08T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 8,
                            "month": 11,
                            "year": 2024
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Nov 8, 2024"
                },
                "duration": "2 hr 25 min",
                "rating": "R - 17+ (violence & profanity)",
                "score": null,
                "scored_by": null,
                "rank": null,
                "popularity": 5316,
                "members": 16972,
                "favorites": 59,
                "synopsis": "A compilation movie for Shingeki no Kyojin: The Final Season - Kanketsu-hen.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 569,
                        "type": "anime",
                        "name": "MAPPA",
                        "url": "https://myanimelist.net/anime/producer/569/MAPPA"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 25777,
                "url": "https://myanimelist.net/anime/25777/Shingeki_no_Kyojin_Season_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/4/84177.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/4/84177t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/4/84177l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/4/84177.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/4/84177t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/4/84177l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "zLaVP8IhIuc",
                    "url": "https://www.youtube.com/watch?v=zLaVP8IhIuc",
                    "embed_url": "https://www.youtube.com/embed/zLaVP8IhIuc?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/zLaVP8IhIuc/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/zLaVP8IhIuc/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/zLaVP8IhIuc/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/zLaVP8IhIuc/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/zLaVP8IhIuc/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin Season 2"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 Season2"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan Season 2"
                    },
                    {
                        "type": "German",
                        "title": "Attack on Titan – 2. Staffel"
                    },
                    {
                        "type": "Spanish",
                        "title": "Ataque a los Titanes Temporada 2"
                    },
                    {
                        "type": "French",
                        "title": "L'Attaque des Titans Saison 2"
                    }
                ],
                "title": "Shingeki no Kyojin Season 2",
                "title_english": "Attack on Titan Season 2",
                "title_japanese": "進撃の巨人 Season2",
                "title_synonyms": [],
                "type": "TV",
                "source": "Manga",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2017-04-01T00:00:00+00:00",
                    "to": "2017-06-17T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 1,
                            "month": 4,
                            "year": 2017
                        },
                        "to": {
                            "day": 17,
                            "month": 6,
                            "year": 2017
                        }
                    },
                    "string": "Apr 1, 2017 to Jun 17, 2017"
                },
                "duration": "24 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.52,
                "scored_by": 1904497,
                "rank": 124,
                "popularity": 12,
                "members": 2781650,
                "favorites": 21783,
                "synopsis": "For centuries, humanity has been hunted by giant, mysterious predators known as the Titans. Three mighty walls—Wall Maria, Rose, and Sheena—provided peace and protection for humanity for over a hundred years. That peace, however, was shattered when the Colossal Titan and Armored Titan appeared and destroyed the outermost wall, Wall Maria. Forced to retreat behind Wall Rose, humanity waited with bated breath for the Titans to reappear and destroy their safe haven once more.\n\nIn Shingeki no Kyojin Season 2, Eren Yeager and others of the 104th Training Corps have just begun to become full members of the Survey Corps. As they ready themselves to face the Titans once again, their preparations are interrupted by the invasion of Wall Rose—but all is not as it seems as more mysteries are unraveled. As the Survey Corps races to save the wall, they uncover more about the invading Titans and the dark secrets of their own members.\n\n[Written by MAL Rewrite]",
                "background": "Shingeki no Kyojin Season 2 adapts content from volumes 9-12 of Hajime Isayama's award-winning manga.",
                "season": "spring",
                "year": 2017,
                "broadcast": {
                    "day": "Saturdays",
                    "time": "22:00",
                    "timezone": "Asia/Tokyo",
                    "string": "Saturdays at 22:00 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1499,
                        "type": "anime",
                        "name": "Techno Sound",
                        "url": "https://myanimelist.net/anime/producer/1499/Techno_Sound"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 35760,
                "url": "https://myanimelist.net/anime/35760/Shingeki_no_Kyojin_Season_3",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1173/92110.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1173/92110t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1173/92110l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1173/92110.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1173/92110t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1173/92110l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "EHzBhrncmac",
                    "url": "https://www.youtube.com/watch?v=EHzBhrncmac",
                    "embed_url": "https://www.youtube.com/embed/EHzBhrncmac?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/EHzBhrncmac/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/EHzBhrncmac/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/EHzBhrncmac/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/EHzBhrncmac/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/EHzBhrncmac/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin Season 3"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 Season3"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan Season 3"
                    },
                    {
                        "type": "German",
                        "title": "Attack on Titan 3. Staffel"
                    },
                    {
                        "type": "Spanish",
                        "title": "Ataque a los Titanes Temporada 3"
                    },
                    {
                        "type": "French",
                        "title": "L'Attaque des Titans Saison 3"
                    }
                ],
                "title": "Shingeki no Kyojin Season 3",
                "title_english": "Attack on Titan Season 3",
                "title_japanese": "進撃の巨人 Season3",
                "title_synonyms": [],
                "type": "TV",
                "source": "Manga",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2018-07-23T00:00:00+00:00",
                    "to": "2018-10-15T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 23,
                            "month": 7,
                            "year": 2018
                        },
                        "to": {
                            "day": 15,
                            "month": 10,
                            "year": 2018
                        }
                    },
                    "string": "Jul 23, 2018 to Oct 15, 2018"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.63,
                "scored_by": 1650094,
                "rank": 81,
                "popularity": 18,
                "members": 2427945,
                "favorites": 20942,
                "synopsis": "Still threatened by the \"Titans\" that rob them of their freedom, mankind remains caged inside the two remaining walls. Efforts to eradicate these monsters continue; however, threats arise not only from the Titans beyond the walls, but from the humans within them as well.\n\nAfter being rescued from the Colossal and Armored Titans, Eren Yaeger devotes himself to improving his Titan form. Krista Lenz struggles to accept the loss of her friend, Captain Levi chooses Eren and his friends to form his new personal squad, and Commander Erwin Smith recovers from his injuries. All seems well for the soldiers, until the government suddenly demands custody of Eren and Krista. The Survey Corps' recent successes have drawn attention, and a familiar face from Levi's past is sent to collect the wanted soldiers. Sought after by the government, Levi and his new squad must evade their adversaries in hopes of keeping Eren and Krista safe.\n\nEren and his fellow soldiers are not only fighting for their survival against the terrifying Titans, but also against the terror of a far more conniving foe: their fellow humans.\n\n[Written by MAL Rewrite]",
                "background": "Shingeki no Kyojin Season 3 adapts content from manga volumes 13-17.",
                "season": "summer",
                "year": 2018,
                "broadcast": {
                    "day": "Mondays",
                    "time": "00:35",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 00:35 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1499,
                        "type": "anime",
                        "name": "Techno Sound",
                        "url": "https://myanimelist.net/anime/producer/1499/Techno_Sound"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 38524,
                "url": "https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1517/100633.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "hKHepjfj5Tw",
                    "url": "https://www.youtube.com/watch?v=hKHepjfj5Tw",
                    "embed_url": "https://www.youtube.com/embed/hKHepjfj5Tw?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin Season 3 Part 2"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 Season3 Part.2"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan Season 3 Part 2"
                    },
                    {
                        "type": "German",
                        "title": "Attack on Titan Staffel 3 Teil 2"
                    },
                    {
                        "type": "Spanish",
                        "title": "Ataque a los Titanes Temporada 3 Parte 2"
                    },
                    {
                        "type": "French",
                        "title": "L'Attaque des Titans Saison 3 Partie 2"
                    }
                ],
                "title": "Shingeki no Kyojin Season 3 Part 2",
                "title_english": "Attack on Titan Season 3 Part 2",
                "title_japanese": "進撃の巨人 Season3 Part.2",
                "title_synonyms": [],
                "type": "TV",
                "source": "Manga",
                "episodes": 10,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2019-04-29T00:00:00+00:00",
                    "to": "2019-07-01T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 29,
                            "month": 4,
                            "year": 2019
                        },
                        "to": {
                            "day": 1,
                            "month": 7,
                            "year": 2019
                        }
                    },
                    "string": "Apr 29, 2019 to Jul 1, 2019"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 9.05,
                "scored_by": 1626359,
                "rank": 5,
                "popularity": 21,
                "members": 2340829,
                "favorites": 59443,
                "synopsis": "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless \"Titans\" takes the stage once again.\n\nReturning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. \n\nShingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement.\n\n[Written by MAL Rewrite]",
                "background": "Shingeki no Kyojin Season 3 Part 2 adapts content from volumes 18-22 of Hajime Isayama's award-winning manga of the same name.",
                "season": "spring",
                "year": 2019,
                "broadcast": {
                    "day": "Mondays",
                    "time": "00:10",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 00:10 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1499,
                        "type": "anime",
                        "name": "Techno Sound",
                        "url": "https://myanimelist.net/anime/producer/1499/Techno_Sound"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 40028,
                "url": "https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1000/110531t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1000/110531l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1000/110531.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1000/110531t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1000/110531l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "SlNpRThS9t8",
                    "url": "https://www.youtube.com/watch?v=SlNpRThS9t8",
                    "embed_url": "https://www.youtube.com/embed/SlNpRThS9t8?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/SlNpRThS9t8/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/SlNpRThS9t8/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/SlNpRThS9t8/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/SlNpRThS9t8/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/SlNpRThS9t8/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin: The Final Season"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin Season 4"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan Season 4"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 The Final Season"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Final Season"
                    },
                    {
                        "type": "German",
                        "title": "Attack on Titan Final Season"
                    },
                    {
                        "type": "Spanish",
                        "title": "Ataque a los Titanes Temporada Final"
                    },
                    {
                        "type": "French",
                        "title": "L'Attaque des Titans Saison Finale"
                    }
                ],
                "title": "Shingeki no Kyojin: The Final Season",
                "title_english": "Attack on Titan: Final Season",
                "title_japanese": "進撃の巨人 The Final Season",
                "title_synonyms": [
                    "Shingeki no Kyojin Season 4",
                    "Attack on Titan Season 4"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 16,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2020-12-07T00:00:00+00:00",
                    "to": "2021-03-29T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 7,
                            "month": 12,
                            "year": 2020
                        },
                        "to": {
                            "day": 29,
                            "month": 3,
                            "year": 2021
                        }
                    },
                    "string": "Dec 7, 2020 to Mar 29, 2021"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.78,
                "scored_by": 1365125,
                "rank": 36,
                "popularity": 34,
                "members": 2058815,
                "favorites": 52411,
                "synopsis": "Gabi Braun and Falco Grice have been training their entire lives to inherit one of the seven Titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps.\n\nHaving finally reached the Yeager family basement and learned about the dark history surrounding the Titans, the Survey Corps has at long last found the answer they so desperately fought to uncover. With the truth now in their hands, the group set out for the world beyond the walls.\n\nIn Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each party pursues its own agenda in the long-awaited conclusion to Paradis' fight for freedom.\n\n[Written by MAL Rewrite]",
                "background": "Shingeki no Kyojin: The Final Season adapts content from volumes 23-28 of Hajime Isayama's award-winning manga.",
                "season": "winter",
                "year": 2021,
                "broadcast": {
                    "day": "Mondays",
                    "time": "00:10",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 00:10 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1499,
                        "type": "anime",
                        "name": "Techno Sound",
                        "url": "https://myanimelist.net/anime/producer/1499/Techno_Sound"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 569,
                        "type": "anime",
                        "name": "MAPPA",
                        "url": "https://myanimelist.net/anime/producer/569/MAPPA"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 48583,
                "url": "https://myanimelist.net/anime/48583/Shingeki_no_Kyojin__The_Final_Season_Part_2",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1948/120625.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1948/120625t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1948/120625l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1948/120625.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1948/120625t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1948/120625l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "EIVVnLlhzr0",
                    "url": "https://www.youtube.com/watch?v=EIVVnLlhzr0",
                    "embed_url": "https://www.youtube.com/embed/EIVVnLlhzr0?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/EIVVnLlhzr0/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/EIVVnLlhzr0/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/EIVVnLlhzr0/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/EIVVnLlhzr0/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/EIVVnLlhzr0/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin: The Final Season Part 2"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin Season 4"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan Season 4"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 The Final Season Part 2"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Final Season Part 2"
                    }
                ],
                "title": "Shingeki no Kyojin: The Final Season Part 2",
                "title_english": "Attack on Titan: Final Season Part 2",
                "title_japanese": "進撃の巨人 The Final Season Part 2",
                "title_synonyms": [
                    "Shingeki no Kyojin Season 4",
                    "Attack on Titan Season 4"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2022-01-10T00:00:00+00:00",
                    "to": "2022-04-04T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 10,
                            "month": 1,
                            "year": 2022
                        },
                        "to": {
                            "day": 4,
                            "month": 4,
                            "year": 2022
                        }
                    },
                    "string": "Jan 10, 2022 to Apr 4, 2022"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.76,
                "scored_by": 785860,
                "rank": 43,
                "popularity": 102,
                "members": 1349142,
                "favorites": 30533,
                "synopsis": "Turning against his former allies and enemies alike, Eren Yeager sets a disastrous plan in motion. Under the guidance of the Beast Titan, Zeke, Eren takes extreme measures to end the ancient conflict between Marley and Eldia—but his true intentions remain a mystery. Delving deep into his family's past, Eren fights to control his own destiny.\n\nMeanwhile, the long-feuding nations of Marley and Eldia utilize both soldiers and Titans in a brutal race to eliminate the other. Reiner Braun uses his own powers in a desperate bid to hold off Eren's own militaristic force, and his fellow Eldians—children Falco Grice and Gabi Braun—struggle to survive in the unfolding chaos.\n\nElsewhere, Eren's childhood friends Mikasa Ackerman and Armin Arlert remain imprisoned alongside Eren's former Survey Corps companions, all disturbed by Eren's monstrous transformation. Under the blind belief that Eren still secretly harbors good intentions, Mikasa and the others enter the fray in an attempt to save their friend's very soul.\n\n[Written by MAL Rewrite]",
                "background": "Shingeki no Kyojin: The Final Season Part 2 adapts content from volumes 29-32 of the original manga.",
                "season": "winter",
                "year": 2022,
                "broadcast": {
                    "day": "Mondays",
                    "time": "00:05",
                    "timezone": "Asia/Tokyo",
                    "string": "Mondays at 00:05 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 569,
                        "type": "anime",
                        "name": "MAPPA",
                        "url": "https://myanimelist.net/anime/producer/569/MAPPA"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 51535,
                "url": "https://myanimelist.net/anime/51535/Shingeki_no_Kyojin__The_Final_Season_-_Kanketsu-hen",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1279/131078.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1279/131078t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1279/131078l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1279/131078.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1279/131078t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1279/131078l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "E7WytLM2KvY",
                    "url": "https://www.youtube.com/watch?v=E7WytLM2KvY",
                    "embed_url": "https://www.youtube.com/embed/E7WytLM2KvY?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/E7WytLM2KvY/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/E7WytLM2KvY/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/E7WytLM2KvY/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/E7WytLM2KvY/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/E7WytLM2KvY/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin: The Final Season - Kanketsu-hen"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin: The Final Season Part 3"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin Season 4"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan Season 4"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 The Final Season完結編"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Final Season - The Final Chapters"
                    }
                ],
                "title": "Shingeki no Kyojin: The Final Season - Kanketsu-hen",
                "title_english": "Attack on Titan: Final Season - The Final Chapters",
                "title_japanese": "進撃の巨人 The Final Season完結編",
                "title_synonyms": [
                    "Shingeki no Kyojin: The Final Season Part 3",
                    "Shingeki no Kyojin Season 4",
                    "Attack on Titan Season 4"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 2,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2023-03-04T00:00:00+00:00",
                    "to": "2023-11-05T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 4,
                            "month": 3,
                            "year": 2023
                        },
                        "to": {
                            "day": 5,
                            "month": 11,
                            "year": 2023
                        }
                    },
                    "string": "Mar 4, 2023 to Nov 5, 2023"
                },
                "duration": "1 hr 12 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.88,
                "scored_by": 407432,
                "rank": 25,
                "popularity": 301,
                "members": 694302,
                "favorites": 15758,
                "synopsis": "In the wake of Eren Yeager's cataclysmic actions, his friends and former enemies form an alliance against his genocidal rampage. Though once bitter foes, Armin Arlert, Mikasa Ackerman, and the remaining members of the Scout Regiment join forces with Reiner Braun and the survivors of the Marleyan military. Their meager united front sets out on a mission to stop Eren's wrath and—if possible—save their old comrade in the process.\n\nAs Eren pushes forward at any cost, he battles his own internal turmoil. Although he feels immense remorse over his horrific invasion, Eren believes he harbors noble intentions: he believes the path ahead is the only way to save his friends and, to a greater extent, his people.\n\nThe opposing battalions spiral toward an inevitable final clash that may claim the lives of millions. Though they face an army of monsters beyond anything they could have previously imagined, Mikasa, Armin, and their allies stand brave in the face of certain doom.\n\n[Written by MAL Rewrite]",
                "background": "Shingeki no Kyojin: The Final Season - Kanketsu-hen adapts content from volumes 32-34 of the original manga.",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1499,
                        "type": "anime",
                        "name": "Techno Sound",
                        "url": "https://myanimelist.net/anime/producer/1499/Techno_Sound"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 569,
                        "type": "anime",
                        "name": "MAPPA",
                        "url": "https://myanimelist.net/anime/producer/569/MAPPA"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 18397,
                "url": "https://myanimelist.net/anime/18397/Shingeki_no_Kyojin_OVA",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/9/59221.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/9/59221t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/9/59221l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/9/59221.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/9/59221t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/9/59221l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin OVA"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin: Ilse no Techou"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan: Ilse's Journal"
                    },
                    {
                        "type": "Synonym",
                        "title": "進撃の巨人 「イルゼの手帳」"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人ＯＡＤ"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan OAD"
                    }
                ],
                "title": "Shingeki no Kyojin OVA",
                "title_english": "Attack on Titan OAD",
                "title_japanese": "進撃の巨人ＯＡＤ",
                "title_synonyms": [
                    "Shingeki no Kyojin: Ilse no Techou",
                    "Attack on Titan: Ilse's Journal",
                    "進撃の巨人 「イルゼの手帳」"
                ],
                "type": "OVA",
                "source": "Manga",
                "episodes": 3,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2013-12-09T00:00:00+00:00",
                    "to": "2014-08-08T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 9,
                            "month": 12,
                            "year": 2013
                        },
                        "to": {
                            "day": 8,
                            "month": 8,
                            "year": 2014
                        }
                    },
                    "string": "Dec 9, 2013 to Aug 8, 2014"
                },
                "duration": "23 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 7.88,
                "scored_by": 277426,
                "rank": 821,
                "popularity": 488,
                "members": 474836,
                "favorites": 951,
                "synopsis": "Ilse no Techou: Aru Chousa Heidanin no Shuki\nDuring the Survey Corps' 49th recon mission, Hange Zoë is determined to capture a titan specimen. Despite not receiving clearance from Commander Erwin Smith, when a titan is spotted in nearby forestland, Hange rides out alone to meet it. Recklessly luring it out, she asks the titan numerous questions and puts her life on the line for the sake of her research. However, the behavior of this particular titan is far from normal. It quickly turns back and enters the wood once again, leading Hange to somewhere specific. What Hange finds is the legacy of former scout Ilse Langnar. In spite of her death, she provides a valuable piece of information that may serve to turn the tide for titan research—a diary documenting her last moments.\n\nTotsuzen no Raihousha: Sainamareru Seishun no Noroi\nJean Kirstein would do anything to escape his boring home life and overbearing mother. After enlisting in the military, it became his ultimate goal to join the Military Police regiment and live out in peace and luxury. However, during his time with the 104th Training Corps, things never really go the way Jean wants them to. Eventually, the stolen glory and condescending banter of his comrades become too much—and Jean challenges fellow cadet Sasha Blouse to a battle, in order to determine which of them is strongest—but who will come out on top?\n\nKonnan\nThe 104th Training Corps' most recent mission is a trek on horseback into the forest. Although a test of their ability to stay alert even in non-threatening situations, the task is boring and can lead to in-fighting. This is especially true for one of the groups, lead by Marco Bott. Some want to stay true to the mission they have been tasked with, and the rest would rather slack off, occupying themselves with more exciting activities. But when trouble strikes, they are completely unprepared.\n\n[Written by MAL Rewrite]",
                "background": "The first Shingeki no Kyojin OVA, Ilse no Techou, is adapted from a side-story in the 5th volume of the Shingeki no Kyojin manga. The second, Totsuzen no Raihousha, is an original story that utilizes the comedic previews found at the end of the manga's volumes. The third is an anime-original story. Ilse no Techou was scheduled to be bundled with the 11th limited-edition manga volume on August 9, but the disc was delayed 4 months. The 11th special-edition manga volume bundled a sticker and 3D card instead of the OVA.",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 31374,
                "url": "https://myanimelist.net/anime/31374/Shingeki_Kyojin_Chuugakkou",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/3/75467.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/3/75467t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/3/75467l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/3/75467.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/3/75467t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/3/75467l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "8APiYXvS6wI",
                    "url": "https://www.youtube.com/watch?v=8APiYXvS6wI",
                    "embed_url": "https://www.youtube.com/embed/8APiYXvS6wI?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/8APiYXvS6wI/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/8APiYXvS6wI/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/8APiYXvS6wI/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/8APiYXvS6wI/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/8APiYXvS6wI/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki! Kyojin Chuugakkou"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack! Titan Junior High"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃！巨人中学校"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Junior High"
                    },
                    {
                        "type": "German",
                        "title": "Attack on Titan: Junior High"
                    },
                    {
                        "type": "Spanish",
                        "title": "Ataque a los Titanes: Junior High"
                    },
                    {
                        "type": "French",
                        "title": "Attack on Titan: Junior High"
                    }
                ],
                "title": "Shingeki! Kyojin Chuugakkou",
                "title_english": "Attack on Titan: Junior High",
                "title_japanese": "進撃！巨人中学校",
                "title_synonyms": [
                    "Attack! Titan Junior High"
                ],
                "type": "TV",
                "source": "Manga",
                "episodes": 12,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2015-10-04T00:00:00+00:00",
                    "to": "2015-12-20T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 4,
                            "month": 10,
                            "year": 2015
                        },
                        "to": {
                            "day": 20,
                            "month": 12,
                            "year": 2015
                        }
                    },
                    "string": "Oct 4, 2015 to Dec 20, 2015"
                },
                "duration": "17 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 7.21,
                "scored_by": 149475,
                "rank": 3194,
                "popularity": 930,
                "members": 269983,
                "favorites": 828,
                "synopsis": "On his first day of junior high, Eren Yeager comes face-to-face with a titan—and has his lunch stolen! From that day on, he holds a grudge against titans for taking his favorite food from him, a cheeseburger, vowing to eliminate their kind once and for all. Along with his adoptive sister Mikasa Ackerman and their friend Armin Arlert, the trio traverse the halls of Titan Junior High, encountering familiar faces and participating in various extracurricular activities as part of the Wall Cleanup Club.\n\nA parody of the immensely popular parent series, Shingeki! Kyojin Chuugakkou places beloved characters as junior high school students, fighting to protect their lunches from gluttonous titans.\n\n[Written by MAL Rewrite]",
                "background": "",
                "season": "fall",
                "year": 2015,
                "broadcast": {
                    "day": "Sundays",
                    "time": "01:58",
                    "timezone": "Asia/Tokyo",
                    "string": "Sundays at 01:58 (JST)"
                },
                "producers": [
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 20,
                        "type": "anime",
                        "name": "Parody",
                        "url": "https://myanimelist.net/anime/genre/20/Parody"
                    },
                    {
                        "mal_id": 23,
                        "type": "anime",
                        "name": "School",
                        "url": "https://myanimelist.net/anime/genre/23/School"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 23777,
                "url": "https://myanimelist.net/anime/23777/Shingeki_no_Kyojin_Movie_2__Jiyuu_no_Tsubasa",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/2/72510.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/2/72510t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/2/72510l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/2/72510.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/2/72510t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/2/72510l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "O8-wUG7sjSk",
                    "url": "https://www.youtube.com/watch?v=O8-wUG7sjSk",
                    "embed_url": "https://www.youtube.com/embed/O8-wUG7sjSk?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/O8-wUG7sjSk/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/O8-wUG7sjSk/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/O8-wUG7sjSk/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/O8-wUG7sjSk/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/O8-wUG7sjSk/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin Movie 2: Jiyuu no Tsubasa"
                    },
                    {
                        "type": "Japanese",
                        "title": "劇場版「進撃の巨人」後編～自由の翼～"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Wings of Freedom"
                    },
                    {
                        "type": "German",
                        "title": "Attack on Titan: Anime Movie Teil 2: Flügel der Freiheit"
                    },
                    {
                        "type": "Spanish",
                        "title": "Ataque a los Titanes, la película parte 2: Las Alas de la Libertad"
                    },
                    {
                        "type": "French",
                        "title": "L’Attaque des Titans: Les Ailes de la Liberté"
                    }
                ],
                "title": "Shingeki no Kyojin Movie 2: Jiyuu no Tsubasa",
                "title_english": "Attack on Titan: Wings of Freedom",
                "title_japanese": "劇場版「進撃の巨人」後編～自由の翼～",
                "title_synonyms": [],
                "type": "Movie",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2015-06-27T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 27,
                            "month": 6,
                            "year": 2015
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Jun 27, 2015"
                },
                "duration": "2 hr",
                "rating": "R - 17+ (violence & profanity)",
                "score": 7.92,
                "scored_by": 54326,
                "rank": 753,
                "popularity": 1702,
                "members": 137162,
                "favorites": 266,
                "synopsis": "Recap of episodes 14-25.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 23775,
                "url": "https://myanimelist.net/anime/23775/Shingeki_no_Kyojin_Movie_1__Guren_no_Yumiya",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/7/63283.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/7/63283t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/7/63283l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/7/63283.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/7/63283t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/7/63283l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "s6nrFDihaNg",
                    "url": "https://www.youtube.com/watch?v=s6nrFDihaNg",
                    "embed_url": "https://www.youtube.com/embed/s6nrFDihaNg?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/s6nrFDihaNg/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/s6nrFDihaNg/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/s6nrFDihaNg/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/s6nrFDihaNg/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/s6nrFDihaNg/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin Movie 1: Guren no Yumiya"
                    },
                    {
                        "type": "Japanese",
                        "title": "劇場版「進撃の巨人」前編～紅蓮の弓矢～"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Crimson Bow and Arrow"
                    },
                    {
                        "type": "German",
                        "title": "Attack on Titan: Anime Movie Teil 1: Feuerroter Pfeil und Bogen"
                    },
                    {
                        "type": "Spanish",
                        "title": "Ataque a los Titanes, la película parte1: El Arco y la Flecha Escarlata"
                    },
                    {
                        "type": "French",
                        "title": "L’Attaque des Titans: L’Arc et la Flèche Écarlates"
                    }
                ],
                "title": "Shingeki no Kyojin Movie 1: Guren no Yumiya",
                "title_english": "Attack on Titan: Crimson Bow and Arrow",
                "title_japanese": "劇場版「進撃の巨人」前編～紅蓮の弓矢～",
                "title_synonyms": [],
                "type": "Movie",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2014-11-22T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 22,
                            "month": 11,
                            "year": 2014
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Nov 22, 2014"
                },
                "duration": "1 hr 58 min",
                "rating": "R - 17+ (violence & profanity)",
                "score": 7.8,
                "scored_by": 54983,
                "rank": 1007,
                "popularity": 1776,
                "members": 130445,
                "favorites": 223,
                "synopsis": "Recap of episodes 1-13.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 42091,
                "url": "https://myanimelist.net/anime/42091/Shingeki_no_Kyojin__Chronicle",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1786/110717.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1786/110717t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1786/110717l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1786/110717.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1786/110717t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1786/110717l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "7wBiYV0oy1I",
                    "url": "https://www.youtube.com/watch?v=7wBiYV0oy1I",
                    "embed_url": "https://www.youtube.com/embed/7wBiYV0oy1I?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/7wBiYV0oy1I/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/7wBiYV0oy1I/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/7wBiYV0oy1I/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/7wBiYV0oy1I/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/7wBiYV0oy1I/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin: Chronicle"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan: Chronicle"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 〜クロニクル〜"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Chronicle"
                    }
                ],
                "title": "Shingeki no Kyojin: Chronicle",
                "title_english": "Attack on Titan: Chronicle",
                "title_japanese": "進撃の巨人 〜クロニクル〜",
                "title_synonyms": [
                    "Attack on Titan: Chronicle"
                ],
                "type": "Movie",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2020-07-17T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 17,
                            "month": 7,
                            "year": 2020
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Jul 17, 2020"
                },
                "duration": "2 hr",
                "rating": "R - 17+ (violence & profanity)",
                "score": 7.78,
                "scored_by": 29673,
                "rank": 1050,
                "popularity": 2292,
                "members": 90379,
                "favorites": 232,
                "synopsis": "The compilation film will recap the anime's 59 episodes from seasons one to three.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1499,
                        "type": "anime",
                        "name": "Techno Sound",
                        "url": "https://myanimelist.net/anime/producer/1499/Techno_Sound"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 36702,
                "url": "https://myanimelist.net/anime/36702/Shingeki_no_Kyojin_Season_2_Movie__Kakusei_no_Houkou",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1710/95650.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1710/95650t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1710/95650l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1710/95650.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1710/95650t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1710/95650l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "Ht1LAooolrI",
                    "url": "https://www.youtube.com/watch?v=Ht1LAooolrI",
                    "embed_url": "https://www.youtube.com/embed/Ht1LAooolrI?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/Ht1LAooolrI/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/Ht1LAooolrI/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/Ht1LAooolrI/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/Ht1LAooolrI/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/Ht1LAooolrI/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin Season 2 Movie: Kakusei no Houkou"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan Season 2 Movie: The Roar of Awakening"
                    },
                    {
                        "type": "Japanese",
                        "title": "劇場版 進撃の巨人 Season2〜覚醒の咆哮〜"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: The Roar of Awakening"
                    },
                    {
                        "type": "German",
                        "title": "Attack on Titan Film Teil 3: Gebrüll des Erwachens"
                    },
                    {
                        "type": "Spanish",
                        "title": "Ataque a los Titanes Temporada 2. La Película: El Rugido del Despertar"
                    },
                    {
                        "type": "French",
                        "title": "L'Attaque des Titans Saison 2 - Film 3: Le Rugissement de l'Éveil"
                    }
                ],
                "title": "Shingeki no Kyojin Season 2 Movie: Kakusei no Houkou",
                "title_english": "Attack on Titan: The Roar of Awakening",
                "title_japanese": "劇場版 進撃の巨人 Season2〜覚醒の咆哮〜",
                "title_synonyms": [
                    "Attack on Titan Season 2 Movie: The Roar of Awakening"
                ],
                "type": "Movie",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2018-01-13T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 13,
                            "month": 1,
                            "year": 2018
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Jan 13, 2018"
                },
                "duration": "2 hr",
                "rating": "R - 17+ (violence & profanity)",
                "score": 7.9,
                "scored_by": 23827,
                "rank": 785,
                "popularity": 2580,
                "members": 74498,
                "favorites": 93,
                "synopsis": "Eren Yeager and others of the 104th Training Corps have just begun to become full members of the Survey Corps. As they ready themselves to face the Titans once again, their preparations are interrupted by the invasion of Wall Rose—but all is not as it seems as more mysteries are unraveled. As the Survey Corps races to save the wall, they uncover more about the invading Titans and the dark secrets of their own members.\n \n[Written by MAL Rewrite]",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 19391,
                "url": "https://myanimelist.net/anime/19391/Shingeki_no_Kyojin_Picture_Drama",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/8/53477.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/8/53477t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/8/53477l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/8/53477.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/8/53477t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/8/53477l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin Picture Drama"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin: Chimi Kyara Gekijou - Tondeke! Kunren Heidan"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan Picture Drama"
                    },
                    {
                        "type": "Japanese",
                        "title": "「進撃の巨人」ちみキャラ劇場\"とんでけ! 訓練兵団\""
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Chibi Theater - Fly, Cadets, Fly!"
                    }
                ],
                "title": "Shingeki no Kyojin Picture Drama",
                "title_english": "Attack on Titan: Chibi Theater - Fly, Cadets, Fly!",
                "title_japanese": "「進撃の巨人」ちみキャラ劇場\"とんでけ! 訓練兵団\"",
                "title_synonyms": [
                    "Shingeki no Kyojin: Chimi Kyara Gekijou - Tondeke! Kunren Heidan",
                    "Attack on Titan Picture Drama"
                ],
                "type": "Special",
                "source": "Manga",
                "episodes": 9,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2013-07-17T00:00:00+00:00",
                    "to": "2014-03-19T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 17,
                            "month": 7,
                            "year": 2013
                        },
                        "to": {
                            "day": 19,
                            "month": 3,
                            "year": 2014
                        }
                    },
                    "string": "Jul 17, 2013 to Mar 19, 2014"
                },
                "duration": "10 min per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.62,
                "scored_by": 27998,
                "rank": 6107,
                "popularity": 2984,
                "members": 57635,
                "favorites": 75,
                "synopsis": "Shingeki no Kyojin Picture Drama  is a series of Flash animated gag shorts included with the Blu-ray Disc/DVD releases, featuring the characters in chibi form. Consisting of nine episodes, this series takes a light hearted and comedic take on the the SNK series with many memorable scenes and dialogues from the original series presented in humorous way. Each episodes depicts 2-3 days in the training of the 104th Trainee Corps as they train to become the hope for mankind in the war against the Titans.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 1155,
                        "type": "anime",
                        "name": "Studio Moriken",
                        "url": "https://myanimelist.net/anime/producer/1155/Studio_Moriken"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 20,
                        "type": "anime",
                        "name": "Parody",
                        "url": "https://myanimelist.net/anime/genre/20/Parody"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 39477,
                "url": "https://myanimelist.net/anime/39477/Shingeki_no_Kyojin_Season_3_Specials",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1909/99638.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1909/99638t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1909/99638l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1909/99638.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1909/99638t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1909/99638l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin Season 3 Specials"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin: Chimi Chara Gekijou \"Tondeke! Shinsei Levi Han\""
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan Season 3 Specials"
                    },
                    {
                        "type": "Japanese",
                        "title": "｢進撃の巨人｣ちみキャラ劇場”とんでけ！新生リヴァイ班”"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Chibi Theater - Survey Corps, Levi Squad!"
                    }
                ],
                "title": "Shingeki no Kyojin Season 3 Specials",
                "title_english": "Attack on Titan: Chibi Theater - Survey Corps, Levi Squad!",
                "title_japanese": "｢進撃の巨人｣ちみキャラ劇場”とんでけ！新生リヴァイ班”",
                "title_synonyms": [
                    "Shingeki no Kyojin: Chimi Chara Gekijou \"Tondeke! Shinsei Levi Han\"",
                    "Attack on Titan Season 3 Specials"
                ],
                "type": "Special",
                "source": "Manga",
                "episodes": 7,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2018-10-17T00:00:00+00:00",
                    "to": "2019-09-18T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 17,
                            "month": 10,
                            "year": 2018
                        },
                        "to": {
                            "day": 18,
                            "month": 9,
                            "year": 2019
                        }
                    },
                    "string": "Oct 17, 2018 to Sep 18, 2019"
                },
                "duration": "2 min per ep",
                "rating": "G - All Ages",
                "score": 7.62,
                "scored_by": 12404,
                "rank": 1469,
                "popularity": 3705,
                "members": 38518,
                "favorites": 68,
                "synopsis": "Shingeki no Kyojin Season 3 DVD/BD specials. They are chibi parody shorts; one video was included on each of the DVD/BDs for a total of seven. Each video contained three stories (essentially chibi parody short episode 38–59) which continued the chibi parody story from the previous chibi parody specials included on the DVD/BDs of the previous seasons.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 1155,
                        "type": "anime",
                        "name": "Studio Moriken",
                        "url": "https://myanimelist.net/anime/producer/1155/Studio_Moriken"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 20,
                        "type": "anime",
                        "name": "Parody",
                        "url": "https://myanimelist.net/anime/genre/20/Parody"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 49627,
                "url": "https://myanimelist.net/anime/49627/Shingeki_no_Kyojin__The_Final_Season_Specials",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1470/117265.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1470/117265t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1470/117265l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1470/117265.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1470/117265t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1470/117265l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin: The Final Season Specials"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin Season 4 Specials"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan Season 4 Specials"
                    },
                    {
                        "type": "Synonym",
                        "title": "Attack on Titan: The Final Season Specials"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 The Final Season Specials"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Chibi Theater - Survey Corps, The Final!"
                    }
                ],
                "title": "Shingeki no Kyojin: The Final Season Specials",
                "title_english": "Attack on Titan: Chibi Theater - Survey Corps, The Final!",
                "title_japanese": "進撃の巨人 The Final Season Specials",
                "title_synonyms": [
                    "Shingeki no Kyojin Season 4 Specials",
                    "Attack on Titan Season 4 Specials",
                    "Attack on Titan: The Final Season Specials"
                ],
                "type": "Special",
                "source": "Manga",
                "episodes": 2,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2021-07-07T00:00:00+00:00",
                    "to": "2021-08-04T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 7,
                            "month": 7,
                            "year": 2021
                        },
                        "to": {
                            "day": 4,
                            "month": 8,
                            "year": 2021
                        }
                    },
                    "string": "Jul 7, 2021 to Aug 4, 2021"
                },
                "duration": "5 min per ep",
                "rating": "G - All Ages",
                "score": 7.58,
                "scored_by": 5226,
                "rank": 1569,
                "popularity": 5484,
                "members": 15631,
                "favorites": 87,
                "synopsis": "Shingeki no Kyojin Season 4 DVD/BD specials. They are chibi parody shorts; one video was included on each of the DVD/BDs. Each video contained eight stories (essentially chibi parody short episode 60–75) which continued the chibi parody story from the previous chibi parody specials included on the DVD/BDs of the previous seasons.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 1155,
                        "type": "anime",
                        "name": "Studio Moriken",
                        "url": "https://myanimelist.net/anime/producer/1155/Studio_Moriken"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 20,
                        "type": "anime",
                        "name": "Parody",
                        "url": "https://myanimelist.net/anime/genre/20/Parody"
                    }
                ],
                "demographics": []
            },
            {
                "mal_id": 25781,
                "url": "https://myanimelist.net/anime/25781/Shingeki_no_Kyojin__Kuinaki_Sentaku",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/8/69497.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/8/69497t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/8/69497l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/8/69497.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/8/69497t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/8/69497l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "zDjZS2PSZ9o",
                    "url": "https://www.youtube.com/watch?v=zDjZS2PSZ9o",
                    "embed_url": "https://www.youtube.com/embed/zDjZS2PSZ9o?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/zDjZS2PSZ9o/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/zDjZS2PSZ9o/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/zDjZS2PSZ9o/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/zDjZS2PSZ9o/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/zDjZS2PSZ9o/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin: Kuinaki Sentaku"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin: Birth of Levi"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 悔いなき選択"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: No Regrets"
                    }
                ],
                "title": "Shingeki no Kyojin: Kuinaki Sentaku",
                "title_english": "Attack on Titan: No Regrets",
                "title_japanese": "進撃の巨人 悔いなき選択",
                "title_synonyms": [
                    "Shingeki no Kyojin: Birth of Levi"
                ],
                "type": "OVA",
                "source": "Visual novel",
                "episodes": 2,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2014-12-09T00:00:00+00:00",
                    "to": "2015-04-09T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 9,
                            "month": 12,
                            "year": 2014
                        },
                        "to": {
                            "day": 9,
                            "month": 4,
                            "year": 2015
                        }
                    },
                    "string": "Dec 9, 2014 to Apr 9, 2015"
                },
                "duration": "27 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 8.41,
                "scored_by": 315615,
                "rank": 185,
                "popularity": 429,
                "members": 528488,
                "favorites": 1972,
                "synopsis": "Many years before becoming the famed captain of the Survey Corps, a young Levi struggles to survive in the capital's garbage dump, the Underground. As the boss of his own criminal operation, Levi attempts to get by with meager earnings while aided by fellow criminals, Isabel Magnolia and Farlan Church. With little hope for the future, Levi accepts a deal from the anti-expedition faction leader Nicholas Lobov, who promises the trio citizenship aboveground if they are able to successfully assassinate Erwin Smith, a squad leader of the Survey Corps.\n\nAs Levi and Erwin cross paths, Erwin acknowledges Levi's agility and skill and gives him the option to either become part of the expedition team, or be turned over to the Military Police, to atone for his crimes. Now closer to the man they are tasked to kill, the group plans to complete their mission and save themselves from a grim demise in the dim recesses of their past home. However, they are about to learn that the surface world is not as liberating as they had thought and that sometimes, freedom can come at a heavy price.\n\nBased on the popular spin-off manga of the same name, Shingeki no Kyojin: Kuinaki Sentaku illustrates the encounter between two of Shingeki no Kyojin's pivotal characters, as well as the events of the 23rd expedition beyond the walls.\n\n[Written by MAL Rewrite]",
                "background": "Shingeki no Kyojin: Kuinaki Sentaku is based on . The visual novel was bundled with the first press release of the 6th Blu-ray volume of the anime's 1st season and was supervised by Shingeki no Kyojin creator Hajime Isayama. It was later adapted into a 2-volume manga series which was serialized in shoujo magazine and illustrated by . The OVA was released for the Western audience when bundled with Kodansha Comics USA's Attack on Titan Special Edition manga. The first part of the OVA was included with the manga's 18th volume on April 5, 2016 while the second part was included with the 19th volume's release on August 2, 2016.",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    }
                ],
                "explicit_genres": [],
                "themes": [],
                "demographics": []
            },
            {
                "mal_id": 36106,
                "url": "https://myanimelist.net/anime/36106/Shingeki_no_Kyojin__Lost_Girls",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/3/89417.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/3/89417t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/3/89417l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/3/89417.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/3/89417t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/3/89417l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": "teowljRFReo",
                    "url": "https://www.youtube.com/watch?v=teowljRFReo",
                    "embed_url": "https://www.youtube.com/embed/teowljRFReo?enablejsapi=1&wmode=opaque&autoplay=1",
                    "images": {
                        "image_url": "https://img.youtube.com/vi/teowljRFReo/default.jpg",
                        "small_image_url": "https://img.youtube.com/vi/teowljRFReo/sddefault.jpg",
                        "medium_image_url": "https://img.youtube.com/vi/teowljRFReo/mqdefault.jpg",
                        "large_image_url": "https://img.youtube.com/vi/teowljRFReo/hqdefault.jpg",
                        "maximum_image_url": "https://img.youtube.com/vi/teowljRFReo/maxresdefault.jpg"
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin: Lost Girls"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 LOST GIRLS"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Lost Girls"
                    }
                ],
                "title": "Shingeki no Kyojin: Lost Girls",
                "title_english": "Attack on Titan: Lost Girls",
                "title_japanese": "進撃の巨人 LOST GIRLS",
                "title_synonyms": [],
                "type": "OVA",
                "source": "Novel",
                "episodes": 3,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2017-12-08T00:00:00+00:00",
                    "to": "2018-08-09T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 8,
                            "month": 12,
                            "year": 2017
                        },
                        "to": {
                            "day": 9,
                            "month": 8,
                            "year": 2018
                        }
                    },
                    "string": "Dec 8, 2017 to Aug 9, 2018"
                },
                "duration": "25 min per ep",
                "rating": "R - 17+ (violence & profanity)",
                "score": 7.82,
                "scored_by": 163558,
                "rank": 940,
                "popularity": 784,
                "members": 316860,
                "favorites": 556,
                "synopsis": "Wall Sina, Goodbye\nAnnie Leonhart has a job to do—and a resulting absence that must stay off her record at all costs. With no one else to turn to, she asks her comrade Hitch Dreyse to cover for her. She agrees but puts forward a single condition: Annie must solve the fruitless missing person case Hitch was assigned. The case revolves around Carly Stratmann, a university graduate and the daughter of wealthy businessman Elliot Stratmann. With only a single day to solve the case and the underground of the Stohess District crawling with thugs, Annie must put her all into finding this girl. Yet, every answer she uncovers only leads to further questions—how has the illegal drug coderoin found its way to Stohess, what is Elliot hiding, and where has Carly disappeared to?\n\nLost in the Cruel World\nWith worry for Eren Yeager gripping her heart, Mikasa Ackerman begins to remember. She remembers her conversations with Armin Arlert, her concern for her friends, and most painfully, the time she had almost lost everything. As fear takes control, she begins to experience an alternate version of her past—some things can be changed, but are there events so inescapable that she cannot even prevent them in her dreams?\n\n[Written by MAL Rewrite]",
                "background": "Shingeki no Kyojin: Lost Girls is an original anime DVD adaptation of Hiroshi Seko's spinoff novel of the same name. The novel is based on Hajime Isayama's manga series Shingeki no Kyojin. The DVDs were bundled with the 24th, 25th, and 26th limited edition volumes of the manga.",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    }
                ],
                "explicit_genres": [],
                "themes": [],
                "demographics": []
            },
            {
                "mal_id": 19285,
                "url": "https://myanimelist.net/anime/19285/Shingeki_no_Kyojin__Ano_Hi_Kara",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/3/51715.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/3/51715t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/3/51715l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/3/51715.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/3/51715t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/3/51715l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin: Ano Hi Kara"
                    },
                    {
                        "type": "Synonym",
                        "title": "Shingeki no Kyojin Episode 13.5"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 総集編「あの日から」"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan: Since That Day"
                    }
                ],
                "title": "Shingeki no Kyojin: Ano Hi Kara",
                "title_english": "Attack on Titan: Since That Day",
                "title_japanese": "進撃の巨人 総集編「あの日から」",
                "title_synonyms": [
                    "Shingeki no Kyojin Episode 13.5"
                ],
                "type": "TV Special",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2013-07-07T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 7,
                            "month": 7,
                            "year": 2013
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "Jul 7, 2013"
                },
                "duration": "24 min",
                "rating": "R - 17+ (violence & profanity)",
                "score": 7.4,
                "scored_by": 70422,
                "rank": 2253,
                "popularity": 1651,
                "members": 143084,
                "favorites": 376,
                "synopsis": "Recap of the events in Shingeki no Kyojin that happened prior to episode 14.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [
                    {
                        "mal_id": 10,
                        "type": "anime",
                        "name": "Production I.G",
                        "url": "https://myanimelist.net/anime/producer/10/Production_IG"
                    },
                    {
                        "mal_id": 53,
                        "type": "anime",
                        "name": "Dentsu",
                        "url": "https://myanimelist.net/anime/producer/53/Dentsu"
                    },
                    {
                        "mal_id": 143,
                        "type": "anime",
                        "name": "Mainichi Broadcasting System",
                        "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
                    },
                    {
                        "mal_id": 144,
                        "type": "anime",
                        "name": "Pony Canyon",
                        "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
                    },
                    {
                        "mal_id": 159,
                        "type": "anime",
                        "name": "Kodansha",
                        "url": "https://myanimelist.net/anime/producer/159/Kodansha"
                    },
                    {
                        "mal_id": 1557,
                        "type": "anime",
                        "name": "Pony Canyon Enterprises",
                        "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises"
                    }
                ],
                "licensors": [
                    {
                        "mal_id": 102,
                        "type": "anime",
                        "name": "Funimation",
                        "url": "https://myanimelist.net/anime/producer/102/Funimation"
                    }
                ],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 1,
                        "type": "anime",
                        "name": "Action",
                        "url": "https://myanimelist.net/anime/genre/1/Action"
                    },
                    {
                        "mal_id": 8,
                        "type": "anime",
                        "name": "Drama",
                        "url": "https://myanimelist.net/anime/genre/8/Drama"
                    },
                    {
                        "mal_id": 41,
                        "type": "anime",
                        "name": "Suspense",
                        "url": "https://myanimelist.net/anime/genre/41/Suspense"
                    }
                ],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 58,
                        "type": "anime",
                        "name": "Gore",
                        "url": "https://myanimelist.net/anime/genre/58/Gore"
                    },
                    {
                        "mal_id": 76,
                        "type": "anime",
                        "name": "Survival",
                        "url": "https://myanimelist.net/anime/genre/76/Survival"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 39478,
                "url": "https://myanimelist.net/anime/39478/Shingeki_no_Kyojin_in_the_Dome__Heishi-tachi_no_Hoshizora",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1893/99639.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1893/99639t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1893/99639l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1893/99639.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1893/99639t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1893/99639l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Shingeki no Kyojin in the Dome: Heishi-tachi no Hoshizora"
                    },
                    {
                        "type": "Japanese",
                        "title": "進撃の巨人 IN THE DOME -兵士たちの星空-"
                    },
                    {
                        "type": "English",
                        "title": "Attack on Titan in the Dome: Soldiers' Starry Sky"
                    }
                ],
                "title": "Shingeki no Kyojin in the Dome: Heishi-tachi no Hoshizora",
                "title_english": "Attack on Titan in the Dome: Soldiers' Starry Sky",
                "title_japanese": "進撃の巨人 IN THE DOME -兵士たちの星空-",
                "title_synonyms": [],
                "type": "Movie",
                "source": "Manga",
                "episodes": 1,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2017-05-20T00:00:00+00:00",
                    "to": null,
                    "prop": {
                        "from": {
                            "day": 20,
                            "month": 5,
                            "year": 2017
                        },
                        "to": {
                            "day": null,
                            "month": null,
                            "year": null
                        }
                    },
                    "string": "May 20, 2017"
                },
                "duration": "20 min",
                "rating": "R - 17+ (violence & profanity)",
                "score": 7.25,
                "scored_by": 3922,
                "rank": 2980,
                "popularity": 4820,
                "members": 21664,
                "favorites": 22,
                "synopsis": "A planetarium film screened originally at the Konica Minolta Planetarium \"Tenku\" in the Tokyo Sky Tree and then later on May 27th at the Konica Minolta Planetarium \"Manten\" in Sunshine City (a commercial building complex in  Ikebukuro).\n\nThe film is entirely CG and was done through the game engine Unity.",
                "background": "",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [],
                "genres": [],
                "explicit_genres": [],
                "themes": [
                    {
                        "mal_id": 38,
                        "type": "anime",
                        "name": "Military",
                        "url": "https://myanimelist.net/anime/genre/38/Military"
                    },
                    {
                        "mal_id": 29,
                        "type": "anime",
                        "name": "Space",
                        "url": "https://myanimelist.net/anime/genre/29/Space"
                    }
                ],
                "demographics": [
                    {
                        "mal_id": 27,
                        "type": "anime",
                        "name": "Shounen",
                        "url": "https://myanimelist.net/anime/genre/27/Shounen"
                    }
                ]
            },
            {
                "mal_id": 49739,
                "url": "https://myanimelist.net/anime/49739/Snickers_x_Shingeki_no_Kyojin",
                "images": {
                    "jpg": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1305/123620.jpg",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1305/123620t.jpg",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1305/123620l.jpg"
                    },
                    "webp": {
                        "image_url": "https://cdn.myanimelist.net/images/anime/1305/123620.webp",
                        "small_image_url": "https://cdn.myanimelist.net/images/anime/1305/123620t.webp",
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1305/123620l.webp"
                    }
                },
                "trailer": {
                    "youtube_id": null,
                    "url": null,
                    "embed_url": null,
                    "images": {
                        "image_url": null,
                        "small_image_url": null,
                        "medium_image_url": null,
                        "large_image_url": null,
                        "maximum_image_url": null
                    }
                },
                "approved": true,
                "titles": [
                    {
                        "type": "Default",
                        "title": "Snickers x Shingeki no Kyojin"
                    },
                    {
                        "type": "Japanese",
                        "title": "スニッカーズ×進撃の巨人"
                    },
                    {
                        "type": "English",
                        "title": "Snickers x Attack on Titan"
                    }
                ],
                "title": "Snickers x Shingeki no Kyojin",
                "title_english": "Snickers x Attack on Titan",
                "title_japanese": "スニッカーズ×進撃の巨人",
                "title_synonyms": [],
                "type": "CM",
                "source": "Unknown",
                "episodes": 2,
                "status": "Finished Airing",
                "airing": false,
                "aired": {
                    "from": "2019-10-01T00:00:00+00:00",
                    "to": "2019-11-01T00:00:00+00:00",
                    "prop": {
                        "from": {
                            "day": 1,
                            "month": 10,
                            "year": 2019
                        },
                        "to": {
                            "day": 1,
                            "month": 11,
                            "year": 2019
                        }
                    },
                    "string": "Oct 1, 2019 to Nov 1, 2019"
                },
                "duration": "30 sec per ep",
                "rating": "PG-13 - Teens 13 or older",
                "score": 6.04,
                "scored_by": 2310,
                "rank": null,
                "popularity": 8639,
                "members": 5100,
                "favorites": 17,
                "synopsis": "The campaign's concept is \"Attack Celebrity\" (or \"Attack on Celebrity\"), where the production team from the Attack on Titan anime series super imposes titan versions of Japanese celebrities into cuts from the anime series and changes the blades into Snickers bars.\n\n(Source: Crunchyroll)",
                "background": "Episode 1: Titan design based of Dewi Sukarno. Episode 2: Titan design based of retired professional wrestler Riki Choshu.",
                "season": null,
                "year": null,
                "broadcast": {
                    "day": null,
                    "time": null,
                    "timezone": null,
                    "string": null
                },
                "producers": [],
                "licensors": [],
                "studios": [
                    {
                        "mal_id": 858,
                        "type": "anime",
                        "name": "Wit Studio",
                        "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
                    }
                ],
                "genres": [
                    {
                        "mal_id": 4,
                        "type": "anime",
                        "name": "Comedy",
                        "url": "https://myanimelist.net/anime/genre/4/Comedy"
                    }
                ],
                "explicit_genres": [],
                "themes": [],
                "demographics": []
            }
        ],
        airry: function() {
            return this.data.filter(function(element, index) {
                return element.airing === true
            })
        },
        Maiair: function() {
            return this.data.filter(function(element, index) {
                return element.airing === false
            })
        }
    }
    
    console.log(Animeeiei.Maiair())

    const football = {
        "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "standings":
                [
                    {
                        "rank": 1,
                        "team": {
                            "id": 50,
                            "name": "Manchester City",
                            "logo": "https://media.api-sports.io/football/teams/50.png"
                        },
                        "points": 89,
                        "goalsDiff": 61,
                        "group": "Premier League",
                        "form": "LDWWW",
                        "status": "same",
                        "description": "Promotion - Champions League (Group Stage: )",
                        "all": {
                            "played": 38,
                            "win": 28,
                            "draw": 5,
                            "lose": 5,
                            "goals": {
                                "for": 94,
                                "against": 33
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 17,
                            "draw": 1,
                            "lose": 1,
                            "goals": {
                                "for": 60,
                                "against": 17
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 11,
                            "draw": 4,
                            "lose": 4,
                            "goals": {
                                "for": 34,
                                "against": 16
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 2,
                        "team": {
                            "id": 42,
                            "name": "Arsenal",
                            "logo": "https://media.api-sports.io/football/teams/42.png"
                        },
                        "points": 84,
                        "goalsDiff": 45,
                        "group": "Premier League",
                        "form": "WLLWW",
                        "status": "same",
                        "description": "Promotion - Champions League (Group Stage: )",
                        "all": {
                            "played": 38,
                            "win": 26,
                            "draw": 6,
                            "lose": 6,
                            "goals": {
                                "for": 88,
                                "against": 43
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 14,
                            "draw": 3,
                            "lose": 2,
                            "goals": {
                                "for": 53,
                                "against": 25
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 12,
                            "draw": 3,
                            "lose": 4,
                            "goals": {
                                "for": 35,
                                "against": 18
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 3,
                        "team": {
                            "id": 33,
                            "name": "Manchester United",
                            "logo": "https://media.api-sports.io/football/teams/33.png"
                        },
                        "points": 75,
                        "goalsDiff": 15,
                        "group": "Premier League",
                        "form": "WWWWL",
                        "status": "same",
                        "description": "Promotion - Champions League (Group Stage: )",
                        "all": {
                            "played": 38,
                            "win": 23,
                            "draw": 6,
                            "lose": 9,
                            "goals": {
                                "for": 58,
                                "against": 43
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 15,
                            "draw": 3,
                            "lose": 1,
                            "goals": {
                                "for": 36,
                                "against": 10
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 8,
                            "draw": 3,
                            "lose": 8,
                            "goals": {
                                "for": 22,
                                "against": 33
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 4,
                        "team": {
                            "id": 34,
                            "name": "Newcastle",
                            "logo": "https://media.api-sports.io/football/teams/34.png"
                        },
                        "points": 71,
                        "goalsDiff": 35,
                        "group": "Premier League",
                        "form": "DDWDL",
                        "status": "same",
                        "description": "Promotion - Champions League (Group Stage: )",
                        "all": {
                            "played": 38,
                            "win": 19,
                            "draw": 14,
                            "lose": 5,
                            "goals": {
                                "for": 68,
                                "against": 33
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 11,
                            "draw": 6,
                            "lose": 2,
                            "goals": {
                                "for": 36,
                                "against": 14
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 8,
                            "draw": 8,
                            "lose": 3,
                            "goals": {
                                "for": 32,
                                "against": 19
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 5,
                        "team": {
                            "id": 40,
                            "name": "Liverpool",
                            "logo": "https://media.api-sports.io/football/teams/40.png"
                        },
                        "points": 67,
                        "goalsDiff": 28,
                        "group": "Premier League",
                        "form": "DDWWW",
                        "status": "same",
                        "description": "Promotion - Europa League (Group Stage: )",
                        "all": {
                            "played": 38,
                            "win": 19,
                            "draw": 10,
                            "lose": 9,
                            "goals": {
                                "for": 75,
                                "against": 47
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 13,
                            "draw": 5,
                            "lose": 1,
                            "goals": {
                                "for": 46,
                                "against": 17
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 6,
                            "draw": 5,
                            "lose": 8,
                            "goals": {
                                "for": 29,
                                "against": 30
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 6,
                        "team": {
                            "id": 51,
                            "name": "Brighton",
                            "logo": "https://media.api-sports.io/football/teams/51.png"
                        },
                        "points": 62,
                        "goalsDiff": 19,
                        "group": "Premier League",
                        "form": "LDWLW",
                        "status": "same",
                        "description": "Promotion - Europa League (Group Stage: )",
                        "all": {
                            "played": 38,
                            "win": 18,
                            "draw": 8,
                            "lose": 12,
                            "goals": {
                                "for": 72,
                                "against": 53
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 10,
                            "draw": 4,
                            "lose": 5,
                            "goals": {
                                "for": 37,
                                "against": 21
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 8,
                            "draw": 4,
                            "lose": 7,
                            "goals": {
                                "for": 35,
                                "against": 32
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 7,
                        "team": {
                            "id": 66,
                            "name": "Aston Villa",
                            "logo": "https://media.api-sports.io/football/teams/66.png"
                        },
                        "points": 61,
                        "goalsDiff": 5,
                        "group": "Premier League",
                        "form": "WDWLL",
                        "status": "same",
                        "description": "Promotion - Europa Conference League (Qualification: )",
                        "all": {
                            "played": 38,
                            "win": 18,
                            "draw": 7,
                            "lose": 13,
                            "goals": {
                                "for": 51,
                                "against": 46
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 12,
                            "draw": 2,
                            "lose": 5,
                            "goals": {
                                "for": 33,
                                "against": 21
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 6,
                            "draw": 5,
                            "lose": 8,
                            "goals": {
                                "for": 18,
                                "against": 25
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 8,
                        "team": {
                            "id": 47,
                            "name": "Tottenham",
                            "logo": "https://media.api-sports.io/football/teams/47.png"
                        },
                        "points": 60,
                        "goalsDiff": 7,
                        "group": "Premier League",
                        "form": "WLLWL",
                        "status": "same",
                        "description": null,
                        "all": {
                            "played": 38,
                            "win": 18,
                            "draw": 6,
                            "lose": 14,
                            "goals": {
                                "for": 70,
                                "against": 63
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 12,
                            "draw": 1,
                            "lose": 6,
                            "goals": {
                                "for": 37,
                                "against": 25
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 6,
                            "draw": 5,
                            "lose": 8,
                            "goals": {
                                "for": 33,
                                "against": 38
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 9,
                        "team": {
                            "id": 55,
                            "name": "Brentford",
                            "logo": "https://media.api-sports.io/football/teams/55.png"
                        },
                        "points": 59,
                        "goalsDiff": 12,
                        "group": "Premier League",
                        "form": "WWWLW",
                        "status": "same",
                        "description": null,
                        "all": {
                            "played": 38,
                            "win": 15,
                            "draw": 14,
                            "lose": 9,
                            "goals": {
                                "for": 58,
                                "against": 46
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 10,
                            "draw": 7,
                            "lose": 2,
                            "goals": {
                                "for": 35,
                                "against": 18
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 5,
                            "draw": 7,
                            "lose": 7,
                            "goals": {
                                "for": 23,
                                "against": 28
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 10,
                        "team": {
                            "id": 36,
                            "name": "Fulham",
                            "logo": "https://media.api-sports.io/football/teams/36.png"
                        },
                        "points": 52,
                        "goalsDiff": 2,
                        "group": "Premier League",
                        "form": "LDWWL",
                        "status": "same",
                        "description": null,
                        "all": {
                            "played": 38,
                            "win": 15,
                            "draw": 7,
                            "lose": 16,
                            "goals": {
                                "for": 55,
                                "against": 53
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 8,
                            "draw": 5,
                            "lose": 6,
                            "goals": {
                                "for": 31,
                                "against": 29
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 7,
                            "draw": 2,
                            "lose": 10,
                            "goals": {
                                "for": 24,
                                "against": 24
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 11,
                        "team": {
                            "id": 52,
                            "name": "Crystal Palace",
                            "logo": "https://media.api-sports.io/football/teams/52.png"
                        },
                        "points": 45,
                        "goalsDiff": -9,
                        "group": "Premier League",
                        "form": "DDWLW",
                        "status": "same",
                        "description": null,
                        "all": {
                            "played": 38,
                            "win": 11,
                            "draw": 12,
                            "lose": 15,
                            "goals": {
                                "for": 40,
                                "against": 49
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 7,
                            "draw": 7,
                            "lose": 5,
                            "goals": {
                                "for": 21,
                                "against": 23
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 4,
                            "draw": 5,
                            "lose": 10,
                            "goals": {
                                "for": 19,
                                "against": 26
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 12,
                        "team": {
                            "id": 49,
                            "name": "Chelsea",
                            "logo": "https://media.api-sports.io/football/teams/49.png"
                        },
                        "points": 44,
                        "goalsDiff": -9,
                        "group": "Premier League",
                        "form": "DLLDW",
                        "status": "same",
                        "description": null,
                        "all": {
                            "played": 38,
                            "win": 11,
                            "draw": 11,
                            "lose": 16,
                            "goals": {
                                "for": 38,
                                "against": 47
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 6,
                            "draw": 7,
                            "lose": 6,
                            "goals": {
                                "for": 20,
                                "against": 19
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 5,
                            "draw": 4,
                            "lose": 10,
                            "goals": {
                                "for": 18,
                                "against": 28
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 13,
                        "team": {
                            "id": 39,
                            "name": "Wolves",
                            "logo": "https://media.api-sports.io/football/teams/39.png"
                        },
                        "points": 41,
                        "goalsDiff": -27,
                        "group": "Premier League",
                        "form": "LDLWL",
                        "status": "same",
                        "description": null,
                        "all": {
                            "played": 38,
                            "win": 11,
                            "draw": 8,
                            "lose": 19,
                            "goals": {
                                "for": 31,
                                "against": 58
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 9,
                            "draw": 3,
                            "lose": 7,
                            "goals": {
                                "for": 19,
                                "against": 20
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 2,
                            "draw": 5,
                            "lose": 12,
                            "goals": {
                                "for": 12,
                                "against": 38
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 14,
                        "team": {
                            "id": 48,
                            "name": "West Ham",
                            "logo": "https://media.api-sports.io/football/teams/48.png"
                        },
                        "points": 40,
                        "goalsDiff": -13,
                        "group": "Premier League",
                        "form": "LWLWL",
                        "status": "same",
                        "description": null,
                        "all": {
                            "played": 38,
                            "win": 11,
                            "draw": 7,
                            "lose": 20,
                            "goals": {
                                "for": 42,
                                "against": 55
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 8,
                            "draw": 4,
                            "lose": 7,
                            "goals": {
                                "for": 26,
                                "against": 24
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 3,
                            "draw": 3,
                            "lose": 13,
                            "goals": {
                                "for": 16,
                                "against": 31
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 15,
                        "team": {
                            "id": 35,
                            "name": "Bournemouth",
                            "logo": "https://media.api-sports.io/football/teams/35.png"
                        },
                        "points": 39,
                        "goalsDiff": -34,
                        "group": "Premier League",
                        "form": "LLLLW",
                        "status": "same",
                        "description": null,
                        "all": {
                            "played": 38,
                            "win": 11,
                            "draw": 6,
                            "lose": 21,
                            "goals": {
                                "for": 37,
                                "against": 71
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 6,
                            "draw": 4,
                            "lose": 9,
                            "goals": {
                                "for": 20,
                                "against": 28
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 5,
                            "draw": 2,
                            "lose": 12,
                            "goals": {
                                "for": 17,
                                "against": 43
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 16,
                        "team": {
                            "id": 65,
                            "name": "Nottingham Forest",
                            "logo": "https://media.api-sports.io/football/teams/65.png"
                        },
                        "points": 38,
                        "goalsDiff": -30,
                        "group": "Premier League",
                        "form": "DWDWL",
                        "status": "same",
                        "description": null,
                        "all": {
                            "played": 38,
                            "win": 9,
                            "draw": 11,
                            "lose": 18,
                            "goals": {
                                "for": 38,
                                "against": 68
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 8,
                            "draw": 6,
                            "lose": 5,
                            "goals": {
                                "for": 27,
                                "against": 24
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 1,
                            "draw": 5,
                            "lose": 13,
                            "goals": {
                                "for": 11,
                                "against": 44
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 17,
                        "team": {
                            "id": 45,
                            "name": "Everton",
                            "logo": "https://media.api-sports.io/football/teams/45.png"
                        },
                        "points": 36,
                        "goalsDiff": -23,
                        "group": "Premier League",
                        "form": "WDLWD",
                        "status": "same",
                        "description": null,
                        "all": {
                            "played": 38,
                            "win": 8,
                            "draw": 12,
                            "lose": 18,
                            "goals": {
                                "for": 34,
                                "against": 57
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 6,
                            "draw": 3,
                            "lose": 10,
                            "goals": {
                                "for": 16,
                                "against": 27
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 2,
                            "draw": 9,
                            "lose": 8,
                            "goals": {
                                "for": 18,
                                "against": 30
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 18,
                        "team": {
                            "id": 46,
                            "name": "Leicester",
                            "logo": "https://media.api-sports.io/football/teams/46.png"
                        },
                        "points": 34,
                        "goalsDiff": -17,
                        "group": "Premier League",
                        "form": "WDLLD",
                        "status": "same",
                        "description": "Relegation - Championship",
                        "all": {
                            "played": 38,
                            "win": 9,
                            "draw": 7,
                            "lose": 22,
                            "goals": {
                                "for": 51,
                                "against": 68
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 5,
                            "draw": 4,
                            "lose": 10,
                            "goals": {
                                "for": 23,
                                "against": 27
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 4,
                            "draw": 3,
                            "lose": 12,
                            "goals": {
                                "for": 28,
                                "against": 41
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 19,
                        "team": {
                            "id": 63,
                            "name": "Leeds",
                            "logo": "https://media.api-sports.io/football/teams/63.png"
                        },
                        "points": 31,
                        "goalsDiff": -30,
                        "group": "Premier League",
                        "form": "LLDLL",
                        "status": "same",
                        "description": "Relegation - Championship",
                        "all": {
                            "played": 38,
                            "win": 7,
                            "draw": 10,
                            "lose": 21,
                            "goals": {
                                "for": 48,
                                "against": 78
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 5,
                            "draw": 7,
                            "lose": 7,
                            "goals": {
                                "for": 26,
                                "against": 37
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 2,
                            "draw": 3,
                            "lose": 14,
                            "goals": {
                                "for": 22,
                                "against": 41
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    },
                    {
                        "rank": 20,
                        "team": {
                            "id": 41,
                            "name": "Southampton",
                            "logo": "https://media.api-sports.io/football/teams/41.png"
                        },
                        "points": 25,
                        "goalsDiff": -37,
                        "group": "Premier League",
                        "form": "DLLLL",
                        "status": "same",
                        "description": "Relegation - Championship",
                        "all": {
                            "played": 38,
                            "win": 6,
                            "draw": 7,
                            "lose": 25,
                            "goals": {
                                "for": 36,
                                "against": 73
                            }
                        },
                        "home": {
                            "played": 19,
                            "win": 2,
                            "draw": 5,
                            "lose": 12,
                            "goals": {
                                "for": 19,
                                "against": 37
                            }
                        },
                        "away": {
                            "played": 19,
                            "win": 4,
                            "draw": 2,
                            "lose": 13,
                            "goals": {
                                "for": 17,
                                "against": 36
                            }
                        },
                        "update": "2023-05-28T00:00:00+00:00"
                    }
                ]
    
        },
        champion: function () {
            return this.league.standings.filter(function (element, index) {
                return element.rank === 1
            })
        },
        topse: function () {
            return this.league.standings.filter(function (element, index) {
                return element.rank < 5
            })
        },
        toptokchan: function () {
            return this.league.standings.filter(function (element, index) {
                return element.rank > 17
            })
        },
        iloveliv: function () {
            return this.league.standings.filter(function (element, index) {
                return element.team.name === 'Liverpool'
            })
        },
        lokdaisea: function () {
            return this.league.standings.filter(function (element, index) {
                return element.team.name === 'Liverpool'
            })[0].goalsDiff
        },
        tumkwasesib: function () {
            return this.league.standings.filter(function (element, index) {
                return element.points < 40
            })
        },
        tidlob: function () {
            return this.league.standings.filter(function (element, index) {
                return element.goalsDiff < 0
            })
        },
        kaban: function () {
            return this.league.standings.filter(function (element, index) {
                return element.home.lose > 5
            })
        },
        kabankao: function () {
            return this.league.standings.filter(function (element, index) {
                return element.away.lose > 5
            })
        }
    
    }
    console.log(football.kabankao())
    
    
    