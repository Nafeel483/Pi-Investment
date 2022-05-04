import React, { useState } from 'react';
import {
  Image,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from './Styles';
import Images from '../../Theme/Images';
import Colors from '../../Theme/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TemporaryInvest from '../../Components/TemporaryInvest';
import InvestmentPackage from '../../Components/InvestmentPackage';

const InvestmentProject = (props) => {
  const [tabsData, setTabsData] = useState([
    "Chọn gói đầu tư",
    "Thanh toán",
    "Họp đồng online",
    "Hoàn tất"
  ])
  const [clickTab, setClickTab] = useState(0)
  const [contract, setContract] = useState("")
  const [bankName, setBankName] = useState("")
  const [accountNum, setAccountNum] = useState("")
  const [amount, setAmount] = useState("")

  const [transfer, setTransfer] = useState("")

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={Styles.safeHeadContainer} />
        <SafeAreaView style={Styles.safeAreaContainer} >
          <StatusBar barStyle="dark-content" />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContent}>
              <ImageBackground source={Images.headList1} style={Styles.headerImage} />
              <View style={Styles.headerModelwrapper}>
                <View style={Styles.headerContainer}>
                  <TouchableOpacity onPress={() => { props.navigation.goBack() }}
                    style={Styles.backBoxContainer}>
                    <Image source={Images.back} style={Styles.backImage} />
                  </TouchableOpacity>
                  <Text style={Styles.headerText}>{"Về PIF"?.toUpperCase()}</Text>
                  <TouchableOpacity
                    style={Styles.emptyContainer}>
                    <Text style={Styles.empty}>{"Bước 1"}</Text>
                  </TouchableOpacity>
                </View>

                {
                  clickTab == 0 ?
                    <>

                      <Image source={Images.indicator1} style={Styles.stepper} />
                      <View style={Styles.tabContainer}>
                        {
                          tabsData?.map((item, tabKey) => {
                            return (
                              <TouchableOpacity key={tabKey} onPress={() => setClickTab(tabKey)}>
                                <Text style={[Styles.tabText, {
                                  color: clickTab == tabKey ? "#00509E" : '#515151',
                                  marginLeft: tabKey == 2 ? hp(4) : tabKey == 3 ? hp(2) : hp(1),
                                }]}>{item}</Text>
                              </TouchableOpacity>
                            )
                          })
                        }
                      </View>

                      <View style={Styles.listHeadCombine}>
                        <View>
                          <Text style={Styles.listHeadText}>{"Thông tin đầu tư"}</Text>
                          <Text style={Styles.listDestext}>{`Số tiền đầu tư )VNĐ)`}</Text>
                        </View>
                        <View style={Styles.lineSeperator} />

                      </View>

                      <View style={Styles.emailWrapper}>
                        <TextInput
                          style={Styles.emailInput}
                          value={contract}
                          placeholder={"0"}
                          placeholderTextColor={"#515151"}
                          autoCapitalize='none'
                          onChangeText={(value) => {
                            setContract(value)
                          }}
                        />
                      </View>

                      <TouchableOpacity
                        style={[Styles.buttonContainer, { backgroundColor: '#00851D', marginTop: hp(4), }]}>
                        <Text style={Styles.buttonText}>{"Đầu tư"}</Text>
                      </TouchableOpacity>


                      <Text style={[Styles.pointsText, { marginTop: hp(2) }]}>{"* Vui lòng đọc hợp đồng điện tử trước khi đầu tư."}</Text>
                      <Text style={Styles.pointsText}>{"* Hãy chắc chắn số tiền bạn muốn đầu tư trước khi đầu tư là đúng"}</Text>
                      <Text style={Styles.pointsText}>{"* Các lệnh đầu tư sẽ bị huỷ trong 20 phút nếu không chuyển khoản"}</Text>


                      <View style={Styles.listHeadCombine}>
                        <View>
                          <Text style={Styles.listHeadText}>{"Gói đầu tư tạm tính  "}</Text>
                        </View>
                        <View style={[Styles.lineSeperator, { marginTop: hp(0.4) }]} />

                      </View>

                      <TemporaryInvest />

                      <View style={Styles.listHeadCombine}>
                        <View>
                          <Text style={Styles.listHeadText}>{"Danh sách gói đầu tư  "}</Text>
                        </View>
                        <View style={[Styles.lineSeperator, { marginTop: hp(0.4) }]} />

                      </View>

                      <InvestmentPackage />
                    </>
                    :
                    clickTab == 1 ?
                      <>
                        <Image source={Images.indicator2} style={Styles.stepper} />
                        <View style={Styles.tabContainer}>
                          {
                            tabsData?.map((item, tabKey) => {
                              return (
                                <TouchableOpacity key={tabKey} onPress={() => setClickTab(tabKey)}>
                                  <Text style={[Styles.tabText, {
                                    color: clickTab == tabKey ? "#00509E" : '#515151',
                                    marginLeft: tabKey == 2 ? hp(4) : tabKey == 3 ? hp(2) : hp(1),
                                  }]}>{item}</Text>
                                </TouchableOpacity>
                              )
                            })
                          }
                        </View>

                        <View style={Styles.listHeadCombine}>
                          <View>
                            <Text style={Styles.listHeadText}>{"Thanh toán đầu tư  "}</Text>
                          </View>
                          <View style={[Styles.lineSeperator, { marginTop: hp(0.4) }]} />
                        </View>

                        {/* Tên ngân hàng  */}
                        <View style={Styles.emailUpperWrapper}>
                          <Text style={Styles.tabEmailText}>{"Tên ngân hàng"}</Text>
                          <View style={Styles.emailWrapperTab}>
                            <TextInput
                              style={Styles.emailInput}
                              value={bankName}
                              placeholder={""}
                              placeholderTextColor={"#515151"}
                              autoCapitalize='none'
                              onChangeText={(value) => {
                                setBankName(value)
                              }}
                            />
                          </View>
                        </View>

                        {/* Số tài khoản  */}
                        <View style={Styles.emailUpperWrapper}>
                          <Text style={Styles.tabEmailText}>{"Số tài khoản"}</Text>
                          <View style={Styles.emailWrapperTab}>
                            <TextInput
                              style={Styles.emailInput}
                              value={accountNum}
                              placeholder={""}
                              placeholderTextColor={"#515151"}
                              autoCapitalize='none'
                              onChangeText={(value) => {
                                setAccountNum(value)
                              }}
                            />
                          </View>
                        </View>

                        {/* Số tiền  */}
                        <View style={Styles.emailUpperWrapper}>
                          <Text style={Styles.tabEmailText}>{"Số tiền"}</Text>
                          <View style={Styles.emailWrapperTab}>
                            <TextInput
                              style={Styles.emailInput}
                              value={amount}
                              placeholder={""}
                              placeholderTextColor={"#515151"}
                              autoCapitalize='none'
                              onChangeText={(value) => {
                                setAmount(value)
                              }}
                            />
                          </View>
                        </View>



                        {/* Nội dung chuyển tiền  */}
                        <View style={Styles.emailUpperWrapper}>
                          <Text style={Styles.tabEmailText}>{"Nội dung chuyển tiền"}</Text>
                          <View style={Styles.emailWrapperTab}>
                            <TextInput
                              style={Styles.emailInput}
                              value={transfer}
                              placeholder={""}
                              placeholderTextColor={"#515151"}
                              autoCapitalize='none'
                              onChangeText={(value) => {
                                setTransfer(value)
                              }}
                            />
                          </View>
                        </View>


                        <View style={Styles.secondButtonWrapper}>
                          <TouchableOpacity
                            style={Styles.secondButtonInner}>
                            <Text style={Styles.buttonText}>{"Chuyển khoản"}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={Styles.secondButtonInner2}>
                            <Text style={Styles.buttonText}>{"Hủy gói"}</Text>
                          </TouchableOpacity>
                        </View>

                        <View style={Styles.listHeadCombine}>
                          <View>
                            <Text style={Styles.listHeadText}>{"Gói đầu tư tạm tính  "}</Text>
                          </View>
                          <View style={[Styles.lineSeperator, { marginTop: hp(0.4) }]} />

                        </View>

                        <TemporaryInvest />
                      </>
                      :
                      clickTab == 2 ?
                        <>
                          <Image source={Images.indicator3} style={Styles.stepper} />
                          <View style={Styles.tabContainer}>
                            {
                              tabsData?.map((item, tabKey) => {
                                return (
                                  <TouchableOpacity key={tabKey} onPress={() => setClickTab(tabKey)}>
                                    <Text style={[Styles.tabText, {
                                      color: clickTab == tabKey ? "#00509E" : '#515151',
                                      marginLeft: tabKey == 2 ? hp(4) : tabKey == 3 ? hp(2) : hp(1),
                                    }]}>{item}</Text>
                                  </TouchableOpacity>
                                )
                              })
                            }
                          </View>

                          <View style={Styles.listHeadCombine}>
                            <View>
                              <Text style={Styles.listHeadText}>{"Xác nhận hợp đồng điện tử"}</Text>
                            </View>
                            <View style={[Styles.lineSeperator, { marginTop: hp(0.4), width: hp(15), }]} />
                          </View>

                          <View style={Styles.descriptionContainer}>
                            <Text style={Styles.descriptionStyle}>{`Chúng tôi đã gửi email hợp đồng điện tử tới`}</Text>
                            <Text style={Styles.descripEmailStyle}>{`hongduc.nhd@gmail.com`}</Text>
                            <Text style={Styles.descriptionStyle}>{`Vui lòng xác nhận hợp đồng để gói đầu tư chính`}</Text>
                            <Text style={Styles.descriptionStyle}>{`thức có hiệu lực`}</Text>
                          </View>

                          <TouchableOpacity
                            style={[Styles.buttonContainer, { backgroundColor: '#0045A2', marginTop: hp(3), }]}>
                            <Text style={Styles.buttonText}>{"Tôi đã xác nhận hợp đồng"}</Text>
                          </TouchableOpacity>

                          <Text style={Styles.questionText}>{"Không nhận được Email?"}</Text>

                          <View style={Styles.listHeadCombine}>
                            <View>
                              <Text style={Styles.listHeadText}>{"Gói đầu tư tạm tính  "}</Text>
                            </View>
                            <View style={[Styles.lineSeperator, { marginTop: hp(0.4) }]} />

                          </View>

                          <TemporaryInvest />
                        </>
                        :
                        <>
                          <Image source={Images.indicator4} style={Styles.stepper} />
                          <View style={Styles.tabContainer}>
                            {
                              tabsData?.map((item, tabKey) => {
                                return (
                                  <TouchableOpacity key={tabKey} onPress={() => setClickTab(tabKey)}>
                                    <Text style={[Styles.tabText, {
                                      color: clickTab == tabKey ? "#00509E" : '#515151',
                                      marginLeft: tabKey == 2 ? hp(4) : tabKey == 3 ? hp(2) : hp(1),
                                    }]}>{item}</Text>
                                  </TouchableOpacity>
                                )
                              })
                            }
                          </View>

                          <View style={Styles.listHeadCombine}>
                            <View>
                              <Text style={Styles.listHeadText}>{"Hoàn tất đầu tư"}</Text>
                            </View>
                            <View style={[Styles.lineSeperator, { marginTop: hp(0.4) }]} />
                          </View>

                          <View style={Styles.descriptionContainer}>
                            <Text style={Styles.descriptionStyle}>{`Chúc mừng bạn đã hoàn tất quá trình đầu tư`}</Text>
                            <View style={Styles.amountContainer}>
                              <Text style={Styles.amountText}>{"200.000.000"}</Text>
                              <Text style={Styles.currencyText}>{"vnd"}</Text>
                            </View>
                            <Text style={Styles.descriptionStyle}>{`Vào dự án Herobook`}</Text>
                            <Text style={Styles.tabFourStyle}>{`Gói đầu tư hiện tại của bạn là "Gói đồng". Lãi suất sẽ bắt đầu được tính từ ngày 02/03/2022`}</Text>
                          </View>

                          <TouchableOpacity
                            style={[Styles.buttonContainer, { backgroundColor: '#0045A2', marginTop: hp(3), }]}>
                            <Text style={Styles.buttonText}>{"Xác nhận"}</Text>
                          </TouchableOpacity>


                          <View style={Styles.listHeadCombine}>
                            <View>
                              <Text style={Styles.listHeadText}>{"Gói đầu tư hiện tại "}</Text>
                            </View>
                            <View style={[Styles.lineSeperator, { marginTop: hp(0.4) }]} />

                          </View>

                          <TemporaryInvest />
                        </>
                }
              </View>


            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
export default InvestmentProject;
