import React, { useState }  from 'react'
import Newsitem from './Newsitem'
const News =(props)=> {
  state[articles,setarticles]=useState([]);
  state[page,setpage]=useState([]);
     const articles= [
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": "NFL Nation",
          "title": "NFL preseason 2023 Week 1 takeaways and schedule - ESPN - ESPN",
          "description": "The NFL preseason continued on Friday with six more games. Here are the key performances from opening night of Week 1.",
          "url": "https://www.espn.com/nfl/story/_/id/38163086/nfl-preseason-2023-week-1-august-10-13-takeaways-schedule-highlights",
          "urlToImage": null,
          "publishedAt": "2023-08-12T03:50:00Z",
          "content": "The first week of the 2023 NFL preseason continued Friday night, with the Cincinnati Bengals hosting the Green Bay Packers, the Tampa Bay Buccaneers hosting the Pittsburgh Steelers, the Detroit Lions… [+15045 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Marshall Cohen, Hannah Rabinowitz, Devan Cole",
          "title": "US attorney leading Hunter Biden criminal probe is now a special counsel after plea talks break down and a trial looms - CNN",
          "description": "The Trump-appointed US attorney who is investigating Hunter Biden has been given special counsel status after plea talks between the Justice Department and the president’s son fell apart.",
          "url": "https://www.cnn.com/2023/08/11/politics/hunter-biden-special-counsel-appointment-merrick-garland/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230811100037-01-hunter-biden-court-072623.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-08-12T03:23:00Z",
          "content": "The Trump-appointed US attorney who is investigating Hunter Biden has been given special counsel status after plea talks between the Justice Department and the presidents son fell apart.\r\nThe prosecu… [+6693 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MLSsoccer.com"
          },
          "author": "mlssoccer",
          "title": "Lionel Messi caps Inter Miami rout! Leagues Cup semifinals await | MLSSoccer.com - MLSsoccer.com",
          "description": "Lionel Messi wasn't going to let Friday night's Leagues Cup quarterfinal match end without finding his way onto the scoresheet.",
          "url": "https://www.mlssoccer.com/news/messi/lionel-messi-caps-inter-miami-rout-leagues-cup-semifinals-await",
          "urlToImage": null,
          "publishedAt": "2023-08-12T02:47:35Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "wwe.com"
          },
          "author": null,
          "title": "Smackdown: August 11, 2023 - WWE",
          "description": "On an amazing Friday Night SmackDown, Jey Uso exclaimed that he’s out of WWE after Spearing Roman Reigns and superkicking his brother Jimmy! Plus, Rey Mysterio became the new United States Champion after defeating Austin Theory, Edge challenged Sheamus to a m…",
          "url": "http://www.wwe.com/2023-08-11",
          "urlToImage": null,
          "publishedAt": "2023-08-12T02:45:25Z",
          "content": "Damage CTRL caused Charlotte Flair vs. Asuka to end in a no-contest\r\nAfter battling Bianca Belair in the Triple Threat Match at SummerSlam, Charlotte Flair and Asuka reignited their fierce rivalry.\r\n… [+1360 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Daily Beast"
          },
          "author": "Michael Daly",
          "title": "Book-Banning Fever: Granbury, Texas, School Trustee Karen Lowery Snuck Into Library - The Daily Beast",
          "description": "A school board trustee was caught skulking around the darkened high-school library.",
          "url": "https://www.thedailybeast.com/book-banning-fever-granbury-texas-school-trustee-karen-lowery-snuck-into-library",
          "urlToImage":null,
          "publishedAt": "2023-08-12T02:16:00Z",
          "content": "At 9:30 a.m. on Aug. 2, when Assistant Principal Danny Guidry walked past the high school library in Granbury, Texas, he saw two figures moving in the darkened interior.\r\nThere were flashing lights f… [+8012 chars]"
        },
        {"source": {
          "id": "cnn",
          "name": "CNN"
          },
          "author": "Ray Sanchez",
          "title": "Hawaii has a robust emergency siren warning system. It sat silent during the deadly wildfires - CNN",
          "description": "Some Maui residents are questioning the effectiveness of the emergency warning system employed as the wildfires spread rapidly across Lahaina and other parts on Tuesday. Hawaii’s attorney general is leading a review of the emergency response.",
          "url": "https://www.cnn.com/2023/08/12/us/hawaii-emergency-warning-system-maui-wildfires/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230810075902-02-hawaii-wildfires-0809.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-08-13T08:41:00Z",
          "content": "Lahaina resident Cole Millington, his dog and a go bag at his side, was already behind the wheel of his truck late Tuesday afternoon when an emergency alert appeared on his phone.\r\nThere wasnt really… [+11320 chars]"
          },
        {
          "source": {
            "id": "cbs-news",
            "name": "CBS News"
          },
          "author": "Faris Tanyos",
          "title": "3-year-old migrant girl dies aboard bus headed from Texas to Chicago - CBS News",
          "description": "She was believed to be traveling with her mother and father, an Illinois state health official told CBS News.",
          "url": "https://www.cbsnews.com/news/migrant-girl-dies-bus-asylum-seekers-texas-chicago-illinois/",
          "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2021/10/22/ff9c4cb3-8c7b-4180-ae49-596b31dc89b4/thumbnail/1200x630/269009b5bca15082f6e6a3f0f477e1cb/gettyimages-88961749.jpg?v=08aa43fa812a9e12e93282c47f58b17f",
          "publishedAt": "2023-08-12T01:30:00Z",
          "content": "A 3-year-old migrant girl riding a bus carrying asylum seekers from Texas to Chicago died Thursday in Southern Illinois, authorities said.\r\nThe girl died at a hospital in Marion County, an official f… [+1693 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Deadline"
          },
          "author": "David Robb",
          "title": "AMPTP Makes Counterproposal To WGA; Negotiations Recess But Will Resume Next Week - Deadline",
          "description": "After their first day of bargaining since the Writers Guild went on strike May 2, the AMPTP and the WGA have recessed their negotiations until next week after the companies made a counterproposal t…",
          "url": "https://deadline.com/2023/08/writers-strike-talks-continue-1235460087/",
          "urlToImage": "https://deadline.com/wp-content/uploads/2023/08/WGA-AMPTP-No-Deal-new-talks.jpg?w=1024",
          "publishedAt": "2023-08-12T00:38:00Z",
          "content": "After their first day of bargaining since the Writers Guild went on strike May 2, the AMPTP and the WGA have recessed their negotiations until next week after the companies made a counterproposal to … [+2624 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hollywood Reporter"
          },
          "author": "Scott Feinberg",
          "title": "How the Emmys’ Date Change Could Impact Oscar Season - Hollywood Reporter",
          "description": "THR's executive editor of awards coverage explores some of the unintended consequences of shifting the Emmys from Sept. 18, 2023 to Jan. 15, 2024.",
          "url": "https://www.hollywoodreporter.com/tv/tv-features/emmys-date-change-impact-oscar-season-1235562128/",
          "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/Jeremy-Allen-White-Critics-Choice-Awards-GettyImages-1456701918-H-2023.jpg?w=1024",
          "publishedAt": "2023-08-12T00:32:01Z",
          "content": "How will week’s decision of the TV Academy to delay the 75th Emmys from Monday, Sept. 18, 2023, until Monday, Jan. 15, 2024, due to the ongoing writers and actors strikes, impact the already-cro… [+4385 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Frank Schwab",
          "title": "Preseason Blitz: Jordan Love looks good in first preseason action as Packers starter - Yahoo Sports",
          "description": "Jordan Love is in a big spot as he takes over for Aaron Rodgers.",
          "url": "https://sports.yahoo.com/preseason-blitz-jordan-love-looks-good-in-first-preseason-action-as-packers-starter-002147653.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/_gNq7AupBLgYK7tKTLNbew--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/3c4d52c0-389f-11ee-bd7d-e257be872ee5",
          "publishedAt": "2023-08-12T00:21:00Z",
          "content": "It's not like we haven't seen Jordan Love play a lot in the preseason before. However, preseason is a lot different.\r\nThere's much more pressure on Love to perform, as the 2020 first-round draft… [+7945 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Salvador Hernandez",
          "title": "Marine charged with sexual assault of 14-year-old girl found at Camp Pendleton - Yahoo News",
          "description": "Military prosecutors have charged a Marine with sexual assault of a minor after a 14-year-old girl was found inside Camp Pendleton barracks.",
          "url": "https://news.yahoo.com/marine-charged-sexual-assault-14-000531210.html",
          "urlToImage": "https://media.zenfs.com/en/la_times_articles_853/5647b512b4ee02b5a3ab7eaec2023dd1",
          "publishedAt": "2023-08-12T00:05:00Z",
          "content": "Military prosecutors have charged a Marine with sexual assault of a minor after a 14-year-old girl was found in June in the barracks of Camp Pendleton, officials said.\r\nThe teen girl was discovered J… [+2350 chars]"
        },
        {
          "source": {
            "id": "the-hill",
            "name": "The Hill"
          },
          "author": "Steff Danielle Thomas",
          "title": "Pence jokes he will ‘bring a fly swatter’ to first GOP debate - The Hill",
          "description": "Former Vice President Pence, during a campaign stop at the Iowa State Fair, brought back memories from his last debate, joking that time he would bring a fly swatter. Pence was asked about his strategy on Friday, including how he would defend himself aga…",
          "url": "https://thehill.com/homenews/campaign/4149818-pence-jokes-he-will-bring-a-fly-swatter-to-first-gop-debate/",
          "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/08/AP23222837699695-e1691797412525.jpg?w=1280",
          "publishedAt": "2023-08-11T23:52:00Z",
          "content": "Skip to content\r\nFormer Vice President Pence, during a campaign stop at the Iowa State Fair, brought back memories from his last debate, joking that time he would bring a fly swatter. \r\nPence wa… [+2161 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "New Yorkers feeling the squeeze as Manhattan rents hit new high - CBS New York",
          "description": "New Yorkers are feeling the squeeze as rents hit a new high. Rent in Manhattan soared to a record-high average of $5,588 in July, up 9% from 2022. CBS New Yo...",
          "url": "https://www.youtube.com/watch?v=GESOh-uZ63A",
          "urlToImage": "https://i.ytimg.com/vi/GESOh-uZ63A/maxresdefault.jpg",
          "publishedAt": "2023-08-11T23:51:46Z",
          "content": null
        },
        {
          "source": {
            "id": "cbs-news",
            "name": "CBS News"
          },
          "author": "Cara Tabachnick",
          "title": "FTX founder Sam Bankman-Fried jailed by federal judge for alleged witness tampering - CBS News",
          "description": "The FTX founder reached out to witnesses and the defendant was remanded to a federal detention center, according to court records.",
          "url": "https://www.cbsnews.com/news/sam-bankman-fried-ftx-jail-federal-judge-witness-tampering/",
          "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/08/11/baa2d27a-1125-44bd-94b9-e311a345676c/thumbnail/1200x630/783bbc45ddf33da375eababd75aa0625/20230811-165232-resized.jpg?v=08aa43fa812a9e12e93282c47f58b17f",
          "publishedAt": "2023-08-11T23:46:00Z",
          "content": "FTX founder Sam Bankman-Fried had his bail revoked and was ordered to be sent to jail Friday by a federal judge in New York after prosecutors alleged he was trying to influence witnesses in his fraud… [+1536 chars]"
        },
        {
          "source": {
            "id": "nfl-news",
            "name": "NFL News"
          },
          "author": null,
          "title": "Commanders-Browns preseason game delayed due to inclement weather - NFL.com",
          "description": "The Washington Commanders-Cleveland Browns preseason opener's kickoff on Friday night was delayed due to inclement weather.",
          "url": "https://www.nfl.com/news/commanders-browns-preseason-game-delayed-due-to-inclement-weather",
          "urlToImage": null,
          "publishedAt": "2023-08-11T23:46:00Z",
          "content": "The Washington Commanders-Cleveland Browns preseason opener's kickoff on Friday night was delayed due to inclement weather and is set to start at 8:46 p.m. ET.\r\nWith \"severe weather\" approaching, fan… [+185 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Niger coup: Fear and anger in Niamey as Ecowas threatens force - BBC",
          "description": "People are already feeling the impact of economic sanctions imposed after a military coup.",
          "url": "https://www.bbc.com/news/world-66478983",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13ACB/production/_130778508_gettyimages-1592502957.jpg",
          "publishedAt": "2023-08-11T23:25:31Z",
          "content": "Zara Kada serves up dishes of rice, fish and vegetables in plastic bowls to her customers sitting on wooden benches in the capital of Niger's capital, Niamey. business is a lifeline for the wido… [+5497 chars]"
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "David Jackson",
          "title": "Judge warns Donald Trump against threatening witnesses in 2020 election case - USA TODAY",
          "description": "Judge tells Trump lawyers: 'Your client’s defense is supposed to happen in courtroom, not on the Internet.'",
          "url": "https://www.usatoday.com/story/news/politics/2023/08/11/donald-trump-talk-judge-to-issue-less-restrictive-order-on-2020-case/70573802007/",
          "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/04/USAT/70526022007-ap-aptopix-trump-indictment-capitol-riot.jpg?crop=2567,1451,x0,y130&width=2567&height=1451&format=pjpg&auto=webp",
          "publishedAt": "2023-08-11T23:03:45Z",
          "content": "WASHINGTON - A federal judge on Friday warned Donald Trump not to make \"inflammatory\" threats against witnesses, part of a limited \"protective order\" that restricts the ex-president's public comments… [+3314 chars]"
        },
        {
          "source": {
            "id": "financial-times",
            "name": "Financial Times"
          },
          "author": "Christopher Grimes",
          "title": "Top Fox lawyer and Lachlan Murdoch confidant Viet Dinh to resign - Financial Times",
          "description": "Departure comes months after $800mn settlement of Dominion Voting Systems claims",
          "url": "https://www.ft.com/content/54329ae5-ca6f-4c4a-a5f4-74ea6cc044fe",
          "urlToImage": null,
          "publishedAt": "2023-08-11T22:26:40Z",
          "content": "What is included in my trial?\r\nDuring your trial you will have complete digital access to FT.com with everything in both of our Standard Digital and Premium Digital packages.\r\nStandard Digital includ… [+1494 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Juli Clover",
          "title": "iOS 17: Everything New With Siri and Spotlight - MacRumors",
          "description": "In iOS 17, Apple has added a handful of new improvements to on-device personal assistant Siri and the Spotlight search feature. There aren't any...",
          "url": "https://www.macrumors.com/guide/ios-17-siri-spotlight/",
          "urlToImage": "https://images.macrumors.com/t/Wy6iPGjOkRr5JfUTi2uQf_WH5HI=/2250x/article-new/2023/07/iOS-17-Siri-Feature.jpg",
          "publishedAt": "2023-08-11T22:09:00Z",
          "content": "In iOS 17, Apple has added a handful of new improvements to on-device personal assistant Siri and the Spotlight search feature. There aren't any major changes, but Spotlight search has improved, and … [+2717 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Chron.com"
          },
          "author": "Ariana Garcia",
          "title": "Texas to see 'the best meteor shower of the year' weekend - Chron",
          "description": "A guide on how to see the peak of the annual Perseid meteor shower weekend in Texas.",
          "url": "https://www.chron.com/news/space/article/texas-meteor-shower-perseids-18292146.php",
          "urlToImage": "https://s.hdnux.com/photos/01/34/03/56/24132500/3/rawImage.jpg",
          "publishedAt": "2023-08-11T21:50:10Z",
          "content": "The Perseid meteor shower is predicted to peak on the night of Aug. 12 year. \r\nZach Cobbs/Getty Images/iStockphoto\r\nAttention Texas stargazers: the \"best meteor shower of the year\" is set to pea… [+2279 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WZTV"
          },
          "author": "WZTV",
          "title": "Health department: 'Widespread' West Nile virus detected in Nashville - WZTV",
          "description": "Metro Health leaders have detected \"widespread\" West Nile Virus across Nashville.",
          "url": "https://fox17.com/news/local/health-department-widespread-west-nile-virus-detected-in-nashville",
          "urlToImage": "https://fox17.com/resources/media/561fba0b-0a16-435d-b78c-3925ebe73c3f-large16x9_MOSQUITO5.jpg",
          "publishedAt": "2023-08-11T21:34:48Z",
          "content": null
        }
      ]
    // async componentDidMount(){
    //     let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ceabcc9fb4747b3b2062ced792a8d0d&page1&pageSize=6";
    //     let data = await fetch(url);
    //     let parseddata = await data.json();
    //     console.log(parseddata);
    //     setState({articles: parseddata.articles})
    // }
    const handlenextclick=async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0ceabcc9fb4747b3b2062ced792a8d0d&page=${this.state.page+1}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
          setpage(page+1)
          setarticles(parseddata.articles)
    }
     const handleprevclick=async()=>{
      console.log("hkl");
    }
    return (
        <div className='container my-3'>
          <h2>NewsMonkey Top-Headlines </h2>
          <div className="row">
            {this.state.articles.map((element)=>{
              console.log(element);
              return <div className="col-md-4" key={element.url} >
                        <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage}  newsurl={element.url}/>
                     </div>
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={handleprevclick}>&larr; Prev Page</button>
            <button type="button" className="btn btn-dark" onClick={handlenextclick}>Next Page &rarr;</button>
          </div>
        </div>
    )
  }

export default News
