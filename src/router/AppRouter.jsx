// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import LoginPage from "../pages/LoginPage";
// // import RegisterPage from "../pages/RegisterPage";
// // import DashboardPage from "../pages/DashboardPage";
// // import UnauthorizedPage from "../pages/UnauthorizedPage";
// // import ProtectedRoute from "../components/ProtectedRoute";

// // export default function AppRouter() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/login" element={<LoginPage />} />
// //         <Route path="/register" element={<RegisterPage />} />
// //         <Route path="/unauthorized" element={<UnauthorizedPage />} />
        
// //         <Route
// //           path="/dashboard"
// //           element={
// //             <ProtectedRoute allowedRole="consumer">
// //               <DashboardPage />
// //             </ProtectedRoute>
// //           }
// //         />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";
// import DashboardPage from "../pages/consumer/DashboardPage";

// import UnauthorizedPage from "../pages/UnauthorizedPage";
// import ProtectedRoute from "../components/ProtectedRoute";
// import CreatorDashboardPage from "../pages/CreatorDashboardPage";
// import AdminDashboardPage from "../pages/admin/AdminDashboardPage";

// export default function AppRouter() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/unauthorized" element={<UnauthorizedPage />} />

//         {/* Protected for consumers */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute allowedRole="consumer">
//               <DashboardPage />
//             </ProtectedRoute>
//           }
//         />

//         {/* Protected for creators */}
//         <Route
//           path="/Creator-dashboard"
//           element={
//             <ProtectedRoute allowedRole="creator">
//               <CreatorDashboardPage />
//             </ProtectedRoute>
//           }

      
//         />
    
//         {/* Protected for admin */}
//         <Route
//         path="/admin-dashboard"
//         element={
//         <ProtectedRoute allowedRole="admin">
//             <AdminDashboardPage />
//         </ProtectedRoute>
//   }
// />
//       </Routes>
//     </BrowserRouter>
//   );
// }



import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";

import DashboardPage from "../pages/DashboardPage";
import CreatorDashboardPage from "../pages/creator/CreatorDashboardPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";

import CreateCollectionPage from "../pages/creator/CreateCollectionPage";
import MyCreationsPage from "../pages/creator/MyCreationsPage";
import CollectionDetailPage from "../pages/creator/ColllectionDetailPage";
import ProtectedRoute from "../components/ProtectedRoute";
import AddProductPage from "../pages/creator/AddProductPage";
import ProductDetailPage from "../pages/creator/ProductDetailPage";

import ResoldProducts from "../components/ResoldProducts";
import MyOwnedProducts from "../components/MyOwnedProducts";
import ConsumerProductDetails from "../components/CustomerProductDetails";
import HomePage from "../pages/HomePage";
import CollectionCarasoul from "../components/CollectionCarasoul";



export default function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* Consumer Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRole="consumer">
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Creator Dashboard + Collection Routes */}
        <Route
          path="/creator-dashboard"
          element={
            <ProtectedRoute allowedRole="creator">
              <CreatorDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/creator-dashboard/create-collection"
          element={
            <ProtectedRoute allowedRole="creator">
              <CreateCollectionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/creator-dashboard/my-creations"
          element={
            <ProtectedRoute allowedRole="creator">
              <MyCreationsPage />
            </ProtectedRoute>
          }
        />
        {/* add product page */}
        <Route
          path="/collections/:collectionId/add-product"
          element={
          <ProtectedRoute allowedRole="creator">
           <AddProductPage />
          </ProtectedRoute>
         }
        />


        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/collections/:collectionId/add-product" element={<AddProductPage />} /> */}
        <Route
         path="/collections/:collectionId"
        element={
          <ProtectedRoute allowedRole="creator">
          <CollectionDetailPage />
          </ProtectedRoute>
        }
        />

        <Route
        path="/product/:productId"
          element={
            <ProtectedRoute allowedRole="creator">
            <ProductDetailPage />
            </ProtectedRoute>
          }
        />
        <Route path="/my-ownership" element={<MyOwnedProducts />} />

        <Route path="/secondary-marketplace" element={<ResoldProducts />} />

        <Route path="/consumer/product/:id" element={<ConsumerProductDetails />} />

        <Route path="/demo" element={<CollectionCarasoul />} />

   


      
   



      </Routes>
    </BrowserRouter>
  );
}
