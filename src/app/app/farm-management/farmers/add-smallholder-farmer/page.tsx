import PageTitle from "@/components/layouts/PageTitle";
import AddSmallholderFarmer from "@/modules/FarmManagement/Farmers/AddSmallholderFarmer";

export default function Page(){
    return(
        <div>
            <PageTitle title="Add Smallholder Farmer" />
            <div className="bg-[#fff] rounded-lg h-full">
                <AddSmallholderFarmer />
            </div>
        </div>
    )
}