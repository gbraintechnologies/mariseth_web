import PageTitle from "@/components/layouts/PageTitle";
import AddLeadFarmer from "@/modules/FarmManagement/Farmers/AddLeadFarmer";

export default function Page(){
    return(
        <div>
            <PageTitle title="Add Lead Farmer" />
            <div className="bg-[#fff] rounded-lg h-full">
                <AddLeadFarmer />
            </div>
        </div>
    )
}