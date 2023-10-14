import logo from './logo.svg';
import './App.css';
import CardNew from './component/card';
function App() {
  return (
    <div className="App">
      <section class="pricing py-5">
  <div class="container">
    <div class="row">
<CardNew  title="free" des="/month" price="$0"list="Single User" list1="5GB Storage" list2="Unlimited Public Projects" list3="Community Access"
          list4="Unlimited private project" list5="Dedicated Phone Support"list6="Free Subdomain" list7="Monthly status report"/>
          <CardNew  title="Pluse"  price="$9"des="/month" list="5 Users" list1="50GB Storage" list2="Unlimited Public Projects" list3="Community Access"
          list4="Unlimited private project" list5="Dedicated Phone Support"list6="Free Subdomain" list7="Monthly status report"/>
          <CardNew  title="Pro" des="/month" price="$49" list="Unlimited Users" list1="150GB Storage" list2="Unlimited Public Projects" list3="Community Access"
          list4="Unlimited private project" list5="Dedicated Phone Support"list6="Free Subdomain" list7="Monthly status report"/>
     </div>
     
     </div>
      </section>
    </div>
  );
}

export default App;
