## Kullanılan Teknolojiler

Uygulamayı geliştirirken, TypeScript, Hooks ve state yönetimi için Redux teknolojilerini kullandım.

## Tasarımın Kodlanması

Anasayfada haberlerin listelenmesi kısmında sade, şık ve kullanıcı dostu bir tasarım kullanmaya özen gösterdim. Tasarımı kodlarken kalabalık CSS kodlarından kaçındım ve responsive bir tasarım kodlamaya çalıştım.

![Simulator Screen Shot - iPhone 1](https://github.com/altiparmakzeynep/webrazzi-rn/assets/43657446/e00356f4-3a0f-4298-8ecd-92c756429787)   ![Simulator Screen Shot - iPhone 1-3](https://github.com/altiparmakzeynep/webrazzi-rn/assets/43657446/466823d0-ce29-4173-b28f-9fd1f69562d2)   ![Simulator Screen Shot - iPhone 1-2](https://github.com/altiparmakzeynep/webrazzi-rn/assets/43657446/2d93d73b-8471-4579-b95d-7df9b9cb3ab7)


## Sayfalar Arası Geçiş

Uygulamanın sayfalar arası geçişleri ve sayfalar arası parametre aktarımını sağlamak için Navigation kütüphanesi kullandım.

## API İsteği ve Verilerin Çekilmesi

Anasayfada listelediğim haberleri ve haber detaylarını Case Study dökümanında paylaşılan endpointleri kullanarak axios kütüphanesi aracılığıyla fetch ettim. TypeScript ile kodlama yaptığım için listelerken kullanacağım verilerin tipi ve bunları doğru belirlemek benim için önemliydi. Bu nedenle endpointlere istek atmamı sağlayacak kodu yazmadan önce Postman uygulaması üzerinden gerekli testlerimi yaptım ve kullanacağım verinin tipini inceledim. Bu aşamada amacım kullanacağım verinin türüne uygun bir interface yazmaktı. Belirlediğim interface’e göre kullanacağım veriyi bir array’e doldurdum. Daha sonra kullanacağım array'in boyutuna uygun olduğunu düşündüğüm bir yöntemle haberleri listeledim. Bu tarz listelemelerde önemli olan uygulamanın performansını ve atılacak olan isteğin yaratacağı stresi doğru hesaplayabilmektir. Bu nedenle bu aşamada gerek görseydim ‘lazy-loading' yöntemi ile verimin tamamını listelemek yerine Örneğin; 10’ ar haber listeleyip kaydırma işlemi tamamlandığında tekrardan 10 adet haber için istek atılabilirdi. Tabii bu noktada kullanılacak olan API’ların da bu işleme uygun olması gerekmektedir. Ancak benim durumumda herhangi bir performans sorunu yaşamadım.

## Haber Detayı Sayfası

Haber detayı listelerken ise karşılaştığım zorluklardan birisi basit bir lifecycle hatasıydı. İnternet hızı, telefon performansı gibi parametrelere bağlı olarak haber detaylarını fetch ederken verimin zamanında load olmaması sorunu yaşıyordum. Bu sorunu basit bir ‘null’ kontrolü yaparak ve sayfama ‘Activity Indicator’ özelliği ekleyerek çözdüm. Bu sayede herhangi bir sebeple data yüklenmediğinde kullanıcı data yükleme işlemi tamamlanana kadar bir loading simgesi görmekte. 

## Arama Modülünün Kodlanması

Bu temel işlevlerin yanı sıra uygulamada anasayfada üst kısımda bulunan bir arama input’u bulunmakta. Bu text input alanıyla kullanıcının klavyeden girdiği her harften sonra haber başlıkları içerisinde arama işlemi gerçekleştirdim. Bu sayede kullanım açısından keyifli bir arama işlemi sağlamış oldum. Ayrıca aramanın performanslı olması için de arama yapacağım başlık bilgilerini arama yapmadan önce harici bir array'de tutarak performans artışı sağlamış oldum.

## Kod Okunurluğu ve Dinamik Kodlama

Bu özelliklerin dışında kod okunurluğum ve uygulama performansı açısından component yapıları kullanmaya özen gösterdim. Header ve BottomBar gibi kısımları component olarak yazdım. Bu sayede dinamik olarak Header componentime yolladığım ‘isBack’ propsu sayesinde geriye dönme işlemi yapılabilecek senaryolarda ekranın header kısmında bir geri butonu olmasını sağladım. Bunu yaparken kodumun daha yalın ve anlaşılır olmasını hedefledim. Bu şekilde ‘Write Once Run Anywhere’  paradigmasını benimseyerek kodlamak performans, kod okunurluğu ve anlaşılabilirliği açısından oldukça faydalıdır.
