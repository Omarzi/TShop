'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "28e7b8dd1e058b0eab2e40b4f369805e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "554ba9e0cc924b339e672b917952e789",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "94aec87f997277a8a645a4bc19ce9961",
".git/logs/refs/heads/main": "74d5d2ec415eb2473d76125e0d1fc6f5",
".git/logs/refs/remotes/origin/main": "27cefa0b9957eae8f0954988ae8e1e2b",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/02/366b6091fee5c5dad3d09b54b0c0f522d7e3ab": "4b59b435b3ed4795d26f4c874b9ed0a6",
".git/objects/04/e91f2a2abee9c4c3e98536809b5b71ccb89b24": "ae02f74c46e364c897a2637a3daa2cf5",
".git/objects/05/3ffb866438ecf5575add34c453d4342913734b": "94a961edfb21b21e9aa1e0795d60d5ed",
".git/objects/07/d41ecd25e82f62e7e40984c0a4b76110cc3829": "4667dcff86fb8d27f571e1538c464834",
".git/objects/0b/4342663fba9d86294b675074f7a4f7bd85a756": "d4d914900c8c1bc6c0acfc98d3f1b12a",
".git/objects/10/518995cc3b0f95e614078feeb0cd8d452f6dea": "f0ed3c209f1a8dfef9bb8089d28d06e9",
".git/objects/13/df6b4b2ad9f082df11d0124244fdfa7a2f4c9f": "eaa01655e882caca7b693d938c31f692",
".git/objects/15/4a505d676561659e91015fcdd2d0a34149d7a9": "cb1c33435582235ad3ca938d00cc8503",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/16/b2833fd81848f59302d605b94dfbcc4d5d4dff": "46a49fa1545aa9a650f0bc84bfbc09b2",
".git/objects/17/baf8631dd858d0b94edf51f1cefa90cda25f5f": "dc0a6f59f2eb33bb4d7def68fd7cd6a6",
".git/objects/1a/0ad7d4e9f1fea4b436d9f19391a234c8c36b9c": "9ca6cb3c482db14366f3e1021aa67211",
".git/objects/1c/fad833bb8ec1322685437a76c2b7b5ed651b49": "b61da87d073d522f82d0db05793c74bc",
".git/objects/1d/129c486bc0b3e8461e2d589ab92d3a4e237c06": "f099164afe77ad103fe8283ce26abeee",
".git/objects/1d/eaada0167009d6cdbf5ad829866afc103cfd2e": "307360ed4ed4b31c3af502ce76e6fcd5",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2a/794b2701f4a3d07b70fa77ab94ca5e4b2b503e": "6792b99701298341a350b566a1d57137",
".git/objects/2c/ddb2ca15e4ce57022ab3f09d86dc32701bf860": "4dab1973dc67dfe5f68f12d758d27209",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/0e84f9548499cd9ad7c32ba563cc9bc637d8b3": "692e28633bd09d8cb706ea885f5f9b01",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/34/b9330ec002f63e835a6ab35da7df2c0847c441": "46656dcd11bdfd480916d06b97e451cf",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/69f89b2b86f1d9371a3128fbca7fcd2ba0a5fe": "4be1e30f2816cd1cf8a4112a62b45651",
".git/objects/3e/54b6832adbe8a0e111c4169b437532264cc93f": "87df441e254a8b86ebbd00b30df0845c",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/40/fb63c38b71a8c8d439e04a2ecbce0aa418c3aa": "a28a79c369e85eaf8097ab819f9f2127",
".git/objects/44/a9c897acf8d6cff5b3ba9c04689608f58cf16b": "bcbdf6bed7cd3b8e6095f6c694842bc0",
".git/objects/47/68fe1d1d867f6753d3dc76af1f083f3edf7c1b": "4da8d5e5359ad6bae87f5f5acfdb4a34",
".git/objects/47/def5d6fa8d238b918a2717a3221bf08d2be823": "6089440094372059493ae08bba3c37e5",
".git/objects/4b/4aa8bfdbf7c6ac65746d090b75d2871f7bca20": "ee43f0046bbd968964d11440e0aa9f56",
".git/objects/4e/514408b22e7cc06dc81e04ae3cbbb80dd50dfd": "e86a8c00b5d61039a5284a37542c8562",
".git/objects/4f/336c899de3f81379ab176c674fa93b5bbc96bc": "0a23030c9055a8bf4f1084989c81f040",
".git/objects/4f/7c2cae0a85340b84be4d132837ec6302d7852e": "ccd0df9a64ecb2c91ad79fe6f5c5228a",
".git/objects/52/aa4e07a48c2b7523d4e10037b2d80b9424c5c3": "39606d084598015d88df6db8ca0638d9",
".git/objects/58/e24c7887fb9b7c3e6fc8715940d271119b1ef3": "ccbc31a80c3a34e57b0adfe34ec2a934",
".git/objects/59/03400040c5a25fb4fc3061e3568e5c3f19ef2b": "06af0040656690fc824dc7f3ea091ec5",
".git/objects/5a/38cf7cbcb779deda0f2a3fee396924d3b1c30b": "6b7c79a32bfefb978fc8e48c746feab5",
".git/objects/5c/84778cbba9b2cf0505962fd714084856527fc1": "a7b706be9fe20ef59431184dc038ee02",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5e/f0ea332148ac95d4fda618c9a48816a759a5c3": "2455b84ac99d3b43a8ebba00a532ff79",
".git/objects/61/bebbe5874ad4631125b22e82adbeaa2b63b196": "c2bcdf5b744b0f38cbc53aff2e5d3f08",
".git/objects/63/8870c04152e1caa2e0e462d4544458548c56f6": "2d5bb6d9ad1c88b90d663b8aeec01da1",
".git/objects/64/7d21e45ea35d51e04f35e8128f1fe495940afe": "76327f857e6281f1bc027efea31189bd",
".git/objects/65/6af8572235b299cc99346cbed8f40d2d2ae9e9": "be1bb1d41b34c9895b0f169369128891",
".git/objects/66/10a1dc262bcfb89c2e365d29e42d847f46ff39": "54bb247ce50d4d10f3d319074f0413f3",
".git/objects/69/a679c1728abfab907dca13d50a17a68b7182ef": "b8f27671a80addec6a76de1b84147cb9",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/b05f75fc3bd05e8edf7d6dc84bedc7aa7d8052": "8500a96c5aefc42094a43c67ed4cc0bc",
".git/objects/6d/393d1cd23bb3d06676bc0194cfb69d77a2af78": "3eaca5225f6a71877c09f978de503bd9",
".git/objects/6f/e89b7cfb635308b8206da650b45177b0ccc96d": "2e487a7a9cbefeb66045bf53bb039e19",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/77/e27cb938b27a31e4da0d8d026cf6307ffc415d": "17e0aa8f2447a6ded8e5ef40f0d1308d",
".git/objects/79/688a6c8fb3118493e5de440e89618e7c5575ed": "76a8785f55a152d238198341a543f26c",
".git/objects/79/b312a1eccc983095863d97aff77d0c97f8ae75": "2d93c6098cedb440c1c7a75e1b2f4312",
".git/objects/7b/4697dc272fe77e3aa1c7a61a58a489077ec44b": "2f2cc42071a7e71fed17315a3cfe32f3",
".git/objects/7c/6c064798fb24afe681646151dc7ba8c1bb3df7": "3c4d4c5d5edfd9692b1535dbda658be7",
".git/objects/7c/8a8de135be713a0317a85c13a98e9c35c2117a": "c53a1179cf80a0cbc76af571b8f6068b",
".git/objects/7e/7d5930f5afdaf8628c2b08ebb1f93fef63df81": "bd4377b1d0257fc903516086e157a435",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/86/ce1871e3524fca0cc756029c9860bac4c03d7f": "71c959dc5e7a9dec8ec2da021e1b5b3c",
".git/objects/86/dea66e382a37de429cf8cc1d7399fca15ab7a5": "a90ed4ca882d4796928efac4455b7a40",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8a448e44fb0240d9a37becd1df8de7b8a12c51": "6dc41d3e7ceaaa16d5374bc37e45b65e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/e969d017ca8504861b2aed0c74bad5cfb1f103": "161e37268b5fd2d6fa21ff09bbadc66f",
".git/objects/8e/41a7ad13b10475f288bb6e0151e5adeb72a728": "d6e4e1262168a476f1efddb41bafb5bf",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/6f56438967c2964e74a28e0ab7333266bb609f": "a1a631870754ef63bfb6a416a5f05720",
".git/objects/98/5227c3efd95c89123f4e75ddbc58c51a772ec1": "5e54b25401f06aacd52b0cac2b316c8e",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/ac278f5a6aaf6e2650fcc13cb0745abc0cb3c2": "4316d30490c6c9354c259d48a8e4ee45",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/a1/28f8a85bb226e5b085ff665a82ae79694e7ee2": "106a1dea41afc2dbda1adfdf76853479",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a3/252e0beabe724dfb0fbce6956293719056a398": "6fd29a272ea1ca1ff77324741685202a",
".git/objects/a4/3032c751d13e40a2e5f9be65d490f76ead57a7": "b725402b530552f4a4c1516af91bf985",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a8/04e9e211ae84900ba27c843b9bd8e023131bd4": "30d3dd36fe862d324ff9a8dba4ca9a5f",
".git/objects/ab/22b4c9faff68d5865d2df624acf6007cbcbdd9": "a067133cabfd7295d1d64ab6bf11c3e1",
".git/objects/ac/c8245bcf5df5b3c402ff22a3a379da0cf97d01": "8833f4544b9cf2cee762e14cffeadddc",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/a73c08d4ed3624b1ee08969f39615ea8d9fae1": "2c6e444602ddabee1130a50a2b20368e",
".git/objects/b4/6942388396f141be80a54e0826b3aa10ed3a62": "c5aedb7700c73e892848437c8afb3812",
".git/objects/b6/1133646cdeb25e77834ca7f779cefaadf974eb": "b51dae2cf9e8753faa637621802c8d92",
".git/objects/b6/5d985e17843f66ba41d39d3d74a21d2da2827d": "7a84cc147aafefde039217a234d400ce",
".git/objects/b6/800962a6b067594ab7f957fdce19e2529a1ca8": "6deea17f9ccc3256c4b0af0a4fa5d91f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/43f6cb641698204c6418ac6946e3b3b664492f": "66b9e33fbd4b8cfc9a6cecf0d72e735b",
".git/objects/b9/98f05087c4e884f2a3254d9aa41f647945ab24": "1cd48b98cffe5a7932cb0c24b6c2b2e1",
".git/objects/bc/c36eaa964d7d26b99cb546c4140512e37e3b77": "498d7e82dff585079d178b76c969f23b",
".git/objects/be/e74e0fcb1b41d7292ec86b17a368a4d79ccc67": "5fc613e221cc71c20f6b2d200cc256e5",
".git/objects/bf/950412e4f984b86d41bea0c4b7a3142f03fda3": "ddbdfe1a640b4bdc64e63f77a791f8a9",
".git/objects/c1/86b3392db596a5fdafe399dc6faa0e50b1523f": "35587489dad583b88d1da66b54ccff1b",
".git/objects/c7/b2c77069620bf31693c5068f6023f871855e90": "063dc922ade57599765ea12a9118c8e4",
".git/objects/c9/8ada509c2c742d58bba3a4e8b4b95e10b74121": "a4831bfe6969591e42efea5dc03e19b0",
".git/objects/cc/cabdf931bfa0ca5d97ac05e8471753a3e0f23f": "3e7b8d3d542b5181ffd58a3b607422ad",
".git/objects/cd/ed7127da5633fef1d8cce79cb6d50afdfa887c": "2e17401a1ed1f7065b369035db4cdd09",
".git/objects/d2/109074ed8af1f53d12d9c9e4073e241c0950ba": "204a7ee7fb7474df1fa829999146215a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/ef50c29edf8c5bf4af25d8ee73a526575c80d9": "a8ab6aa2f0725877b0079c203a225716",
".git/objects/e3/73d8d64b1048f827aee6f06e65ce7af91e2085": "458fe950410e8b8204eea2b918058eb1",
".git/objects/e5/10ddb6b514b3b6902f80deaf075a9ad2d52c55": "845558d1d2011440d56516433e84fc69",
".git/objects/e6/eecb2830acc1c6d0172401c57246460e8441ba": "3c6346ad1a3d1513fb90b16b7bb7c92b",
".git/objects/e7/22c6162a04924db347584fc80c69c7e5092e0a": "0e68cb86039251f373f0a79780533af1",
".git/objects/e8/832a2405b41d48e6d30451899e280d0a3eb884": "c31353cd72f8aa005c1c501e5a31eb64",
".git/objects/e9/a6dbb06b82939449307e9aab304628b3c46525": "da237aede30a8aadd229c82977a4dbbf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/eba39bbb6f41a6f71fcc3c078fd10f27f0f704": "e38281495b0a96ea6537da76fe50f77a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f6/9375404687f27de0c14697cb61332bb91b9cf5": "5f8cc0cdd284a0c17f82dcf7c0d5b57b",
".git/objects/f8/2693223a6329edd44b717f2133ab119e2971e1": "38ea4070844c5acad52e1e774b91d0af",
".git/objects/fc/af9cbee3119efc855242a5e4f8685aa410ca73": "a4fe6d1cb7f4513ca95824859ff3bfd2",
".git/objects/fc/f59c177acd91508e68ba70e878841b6976d944": "2a31c0bd6f820a98973809d121d2ddfb",
".git/refs/heads/main": "72bacaea09f146cc2a48880acb78989d",
".git/refs/remotes/origin/main": "72bacaea09f146cc2a48880acb78989d",
"assets/AssetManifest.bin": "2d671900e9e3e2e9fa5f50602f684b40",
"assets/AssetManifest.bin.json": "6cdb83be240308c88d4a3cb9f368dcf6",
"assets/AssetManifest.json": "fbff93d329a19519d65226ebe16c2819",
"assets/assets/fonts/urbanist/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/urbanist/Urbanist-Italic.ttf": "213b2ebe4092125001fa5d9f686ac1a0",
"assets/assets/fonts/urbanist/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/urbanist/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/urbanist/Urbanist-MediumItalic.ttf": "1497d007b844b9b86a871ff242929d51",
"assets/assets/fonts/urbanist/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/urbanist/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/icons/payment_methods/apple-pay.png": "3c1f533a24ae1a3ea3c7ac9104820b21",
"assets/assets/icons/payment_methods/credit-card.png": "6ffbf260c19fde171b618ce6fb48314a",
"assets/assets/icons/payment_methods/google-pay.png": "5a02c53580e0bd0b61a30e03c886bab4",
"assets/assets/icons/payment_methods/master-card.png": "647f4f9e11f4fa27fc415b1190a1d9e0",
"assets/assets/icons/payment_methods/paypal.png": "1597d2e2a75ec5d8f9ea4fbc40ff7e3d",
"assets/assets/icons/payment_methods/paystack.png": "4a7ac4e8e0a890715d732e007a79864d",
"assets/assets/icons/payment_methods/paytm.png": "a5f0f450edb5fd5512efc780b067d39d",
"assets/assets/icons/payment_methods/successful_payment_icon.png": "c6ecac5e4a7b5ab35be124e482287cd4",
"assets/assets/icons/payment_methods/visa.png": "dcd36d867f0f60f1ddf675f28b460981",
"assets/assets/images/animations/104368-thank-you.json": "cb41def8492745f6da17aa174f24bc18",
"assets/assets/images/animations/110052-paper-plane.json": "f37753fd6490213aafe42c28ce082860",
"assets/assets/images/animations/120978-payment-successful.json": "23257c5bfbb6517be2883084bac86fe7",
"assets/assets/images/animations/136491-animation-lottie-car-rides.json": "c7be1f7cd21460d83e7af61b45c23294",
"assets/assets/images/animations/140429-pencil-drawing.json": "ad496d8fba433f392cac58a28f592c5a",
"assets/assets/images/animations/141397-loading-juggle.json": "18cd80a46915ce96176088f6de32cc17",
"assets/assets/images/animations/141594-animation-of-docer.json": "0447d6592aa7c62f7464b5a867a18bf7",
"assets/assets/images/animations/53207-empty-file.json": "798eedcbdacc86b43851c8f678c4eb83",
"assets/assets/images/animations/67263-security-icon-transparent.json": "c6aa8a75f3bdf204d2c7fe86a68076e0",
"assets/assets/images/animations/72462-check-register.json": "f025dd10b211685777be1fc8b9d43f37",
"assets/assets/images/animations/72785-searching.json": "42d6b09696a19c24719a8102a4f093c9",
"assets/assets/images/animations/98783-packaging-in-progress.json": "ad95f6974da0dbcbb295e6ca62997668",
"assets/assets/images/animations/cloud-uploading-animation.json": "1cd38deb1399a0368a650d21dc2fdcab",
"assets/assets/images/animations/congratulation.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/assets/images/animations/coupon.gif": "5073098098cb9926b4d3d66effcc0bad",
"assets/assets/images/animations/creating-product.gif": "5a3613a3e6f14f0abfb8e80d7a9cb929",
"assets/assets/images/animations/dashboard.gif": "e63c076695bacbe89293116ce6e9a4f3",
"assets/assets/images/animations/default-loader-animation.json": "0a0b121ec84940f613d27b4d72c75048",
"assets/assets/images/animations/lady-adding-product-in-cart-animation.json": "fa6f9ae5b579cf56ade9fec2d74010af",
"assets/assets/images/animations/loader-animation.json": "2f4d8873f57c144c9c1cc001c19fd2fd",
"assets/assets/images/animations/media-3D.gif": "c67dc4c295c416b7b558830a741f9ef6",
"assets/assets/images/animations/no-connection.gif": "0190315985e4c32e50f730dcd2458f13",
"assets/assets/images/animations/order-complete-car-delivery-animation.json": "f4ac9e34a730c64dad0940752f2438bd",
"assets/assets/images/animations/riding.gif": "5cb72a933dd957e47d999b3258861e9a",
"assets/assets/images/animations/sammy-line-come-back-later.png": "bb489d0ad837808917ed0b3bd2c17d97",
"assets/assets/images/animations/sammy-line-man-receives-a-mail.png": "05ecfa9b154cb7fe1d4f4339119a3b45",
"assets/assets/images/animations/sammy-line-sale.png": "c8cf76d47496487772f231d41e3673ed",
"assets/assets/images/animations/sammy-line-success.png": "4aaf57cacb9b7514f345bd45cea880e1",
"assets/assets/images/animations/sammy-line-travel-backpack-with-passport-and-air-ticket.gif": "a691c26c3c08c432f68ce4b117dcb6a0",
"assets/assets/images/animations/sammy-line-workout.gif": "32c3916fc369a730a7aa7a6c24b9583e",
"assets/assets/images/animations/table.gif": "072623139f612fbb1e91678b8a98abae",
"assets/assets/images/animations/tick-confetti.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/assets/images/animations/uploading-document.json": "a7c973378012ac7a2857955b8c7e6e32",
"assets/assets/images/animations/uploading-done.json": "684c443c716f99421747aae5a9c6ebbe",
"assets/assets/images/animations/uploading-files-from-computer-to-cloud-storage.gif": "ee0de1d1b3bbaeaf6413fe55e8e1dbdc",
"assets/assets/images/content/default-image-icon.png": "adc3e03ee76f67785309b761c731a0c7",
"assets/assets/images/content/default-images-icon.png": "d891e5ee15e14498bdb690461e14d974",
"assets/assets/images/content/default_image.png": "79794da0bf39e1aa1ed0d76ca08ddfde",
"assets/assets/images/content/media.png": "9e19c8e2a73eff14bb75090b90b782c5",
"assets/assets/images/content/tiny-color-palette.png": "b7e756302d4e0b3ce3d7ba87fa5b555c",
"assets/assets/images/content/tiny-man-maintaining-a-work-life-balance.png": "4276412c3f27426077b7e8e6dcec184e",
"assets/assets/images/content/user.jpg": "7af9f2268e64db0f9efdcfa42da7de5c",
"assets/assets/images/content/user.png": "f9e447f2bebc53ca0294824e2db43c82",
"assets/assets/logos/cwt-logo.png": "d3605ac179e38fce26bafcc07d2536d4",
"assets/assets/logos/facebook-icon.png": "be0423f843fc36586991cbf92c059422",
"assets/assets/logos/google-icon.png": "b95e5615716a3ae4b62f14a430bb1253",
"assets/assets/logos/logo.png": "6396522830c33b00837003d3a6dda31c",
"assets/assets/logos/t-store-splash-logo-black.png": "425cc60a7c8477edbfb74238f27a6a52",
"assets/assets/logos/t-store-splash-logo-white.png": "26c572a447af0ff225c357ca27026983",
"assets/FontManifest.json": "38cb77e090d68c1abf721235a36a5a3e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/urbanist/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/fonts/urbanist/Urbanist-Italic.ttf": "213b2ebe4092125001fa5d9f686ac1a0",
"assets/fonts/urbanist/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/fonts/urbanist/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/fonts/urbanist/Urbanist-MediumItalic.ttf": "1497d007b844b9b86a871ff242929d51",
"assets/fonts/urbanist/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/fonts/urbanist/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/icons/payment_methods/apple-pay.png": "3c1f533a24ae1a3ea3c7ac9104820b21",
"assets/icons/payment_methods/credit-card.png": "6ffbf260c19fde171b618ce6fb48314a",
"assets/icons/payment_methods/google-pay.png": "5a02c53580e0bd0b61a30e03c886bab4",
"assets/icons/payment_methods/master-card.png": "647f4f9e11f4fa27fc415b1190a1d9e0",
"assets/icons/payment_methods/paypal.png": "1597d2e2a75ec5d8f9ea4fbc40ff7e3d",
"assets/icons/payment_methods/paystack.png": "4a7ac4e8e0a890715d732e007a79864d",
"assets/icons/payment_methods/paytm.png": "a5f0f450edb5fd5512efc780b067d39d",
"assets/icons/payment_methods/successful_payment_icon.png": "c6ecac5e4a7b5ab35be124e482287cd4",
"assets/icons/payment_methods/visa.png": "dcd36d867f0f60f1ddf675f28b460981",
"assets/images/animations/104368-thank-you.json": "cb41def8492745f6da17aa174f24bc18",
"assets/images/animations/110052-paper-plane.json": "f37753fd6490213aafe42c28ce082860",
"assets/images/animations/120978-payment-successful.json": "23257c5bfbb6517be2883084bac86fe7",
"assets/images/animations/136491-animation-lottie-car-rides.json": "c7be1f7cd21460d83e7af61b45c23294",
"assets/images/animations/140429-pencil-drawing.json": "ad496d8fba433f392cac58a28f592c5a",
"assets/images/animations/141397-loading-juggle.json": "18cd80a46915ce96176088f6de32cc17",
"assets/images/animations/141594-animation-of-docer.json": "0447d6592aa7c62f7464b5a867a18bf7",
"assets/images/animations/53207-empty-file.json": "798eedcbdacc86b43851c8f678c4eb83",
"assets/images/animations/67263-security-icon-transparent.json": "c6aa8a75f3bdf204d2c7fe86a68076e0",
"assets/images/animations/72462-check-register.json": "f025dd10b211685777be1fc8b9d43f37",
"assets/images/animations/72785-searching.json": "42d6b09696a19c24719a8102a4f093c9",
"assets/images/animations/98783-packaging-in-progress.json": "ad95f6974da0dbcbb295e6ca62997668",
"assets/images/animations/cloud-uploading-animation.json": "1cd38deb1399a0368a650d21dc2fdcab",
"assets/images/animations/congratulation.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/images/animations/coupon.gif": "5073098098cb9926b4d3d66effcc0bad",
"assets/images/animations/creating-product.gif": "5a3613a3e6f14f0abfb8e80d7a9cb929",
"assets/images/animations/dashboard.gif": "e63c076695bacbe89293116ce6e9a4f3",
"assets/images/animations/default-loader-animation.json": "0a0b121ec84940f613d27b4d72c75048",
"assets/images/animations/lady-adding-product-in-cart-animation.json": "fa6f9ae5b579cf56ade9fec2d74010af",
"assets/images/animations/loader-animation.json": "2f4d8873f57c144c9c1cc001c19fd2fd",
"assets/images/animations/media-3D.gif": "c67dc4c295c416b7b558830a741f9ef6",
"assets/images/animations/no-connection.gif": "0190315985e4c32e50f730dcd2458f13",
"assets/images/animations/order-complete-car-delivery-animation.json": "f4ac9e34a730c64dad0940752f2438bd",
"assets/images/animations/riding.gif": "5cb72a933dd957e47d999b3258861e9a",
"assets/images/animations/sammy-line-come-back-later.png": "bb489d0ad837808917ed0b3bd2c17d97",
"assets/images/animations/sammy-line-man-receives-a-mail.png": "05ecfa9b154cb7fe1d4f4339119a3b45",
"assets/images/animations/sammy-line-sale.png": "c8cf76d47496487772f231d41e3673ed",
"assets/images/animations/sammy-line-success.png": "4aaf57cacb9b7514f345bd45cea880e1",
"assets/images/animations/sammy-line-travel-backpack-with-passport-and-air-ticket.gif": "a691c26c3c08c432f68ce4b117dcb6a0",
"assets/images/animations/sammy-line-workout.gif": "32c3916fc369a730a7aa7a6c24b9583e",
"assets/images/animations/table.gif": "072623139f612fbb1e91678b8a98abae",
"assets/images/animations/tick-confetti.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/images/animations/uploading-document.json": "a7c973378012ac7a2857955b8c7e6e32",
"assets/images/animations/uploading-done.json": "684c443c716f99421747aae5a9c6ebbe",
"assets/images/animations/uploading-files-from-computer-to-cloud-storage.gif": "ee0de1d1b3bbaeaf6413fe55e8e1dbdc",
"assets/images/content/default-image-icon.png": "adc3e03ee76f67785309b761c731a0c7",
"assets/images/content/default-images-icon.png": "d891e5ee15e14498bdb690461e14d974",
"assets/images/content/default_image.png": "79794da0bf39e1aa1ed0d76ca08ddfde",
"assets/images/content/media.png": "9e19c8e2a73eff14bb75090b90b782c5",
"assets/images/content/tiny-color-palette.png": "b7e756302d4e0b3ce3d7ba87fa5b555c",
"assets/images/content/tiny-man-maintaining-a-work-life-balance.png": "4276412c3f27426077b7e8e6dcec184e",
"assets/images/content/user.jpg": "7af9f2268e64db0f9efdcfa42da7de5c",
"assets/images/content/user.png": "f9e447f2bebc53ca0294824e2db43c82",
"assets/logos/cwt-logo.png": "d3605ac179e38fce26bafcc07d2536d4",
"assets/logos/facebook-icon.png": "be0423f843fc36586991cbf92c059422",
"assets/logos/google-icon.png": "b95e5615716a3ae4b62f14a430bb1253",
"assets/logos/logo.png": "6396522830c33b00837003d3a6dda31c",
"assets/logos/t-store-splash-logo-black.png": "425cc60a7c8477edbfb74238f27a6a52",
"assets/logos/t-store-splash-logo-white.png": "26c572a447af0ff225c357ca27026983",
"assets/NOTICES": "e80aa5d364d324561cf3e5badded27b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "0f5a091e7892246def9b8e2b66df87cb",
"icons/creating-product.gif": "5a3613a3e6f14f0abfb8e80d7a9cb929",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "6396522830c33b00837003d3a6dda31c",
"index.html": "9bde5a64d1535a0f60dda698153a3df2",
"/": "9bde5a64d1535a0f60dda698153a3df2",
"main.dart.js": "9cc5f300c0ccdb2ce7ab01e9fd1f555b",
"manifest.json": "4228be4447c9268fc3a998fb2acf27db",
"version.json": "89d5df4b77c8f7397058dcdd9a13c2de"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
